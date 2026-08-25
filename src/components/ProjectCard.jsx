import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import Tint from "./Tint.jsx";

function StackChips({ items }) {
  return (
    <Stack direction="row" spacing={0.75} sx={{ flexWrap: "wrap", rowGap: 0.75, mb: 0.5 }}>
      {items.map((item) => (
        <Chip key={item} label={item} size="small" variant="outlined" sx={{ borderColor: "divider", color: "text.secondary" }} />
      ))}
    </Stack>
  );
}

function IconPlaceholder({ Icon, label }) {
  return (
    <Box
      sx={{
        aspectRatio: "16 / 9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1,
        backgroundColor: "#0b0b0e",
        backgroundImage: "radial-gradient(ellipse at center, rgba(255,77,23,0.1), transparent 65%)",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "primary.main",
      }}
    >
      <Icon sx={{ fontSize: 52 }} />
      <Typography component="span" className="mono" sx={{ color: "text.secondary" }}>
        {label}
      </Typography>
    </Box>
  );
}

function Media({ image, video, alt, portrait, seed }) {
  const container = {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    overflow: "hidden",
    backgroundColor: "#0b0b0e",
    borderBottom: "1px solid",
    borderColor: "divider",
  };

  if (portrait && image) {
    return (
      <Box sx={container} className="shot">
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(28px) brightness(0.4) saturate(1.1)",
            transform: "scale(1.15)",
          }}
        />
        <Box
          component="img"
          src={image}
          alt={alt}
          loading="lazy"
          sx={{
            position: "relative",
            display: "block",
            height: "100%",
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
        {/*         <Tint seed={seed} />*/}
      </Box>
    );
  }

  const fill = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  if (video) {
    return (
      <Box sx={container} className="shot">
        <Box component="video" src={video} poster={image} autoPlay loop muted playsInline preload="metadata" aria-label={alt} sx={fill} />
        {/*         <Tint seed={seed} />*/}{" "}
      </Box>
    );
  }

  return (
    <Box sx={container} className="shot">
      <Box
        component="img"
        src={image}
        alt={alt}
        loading="lazy"
        sx={fill}
        onError={(e) => {
          e.currentTarget.style.visibility = "hidden";
        }}
      />
      {/*  <Tint seed={seed} /> */}
    </Box>
  );
}

export default function ProjectCard({ project, index, onOpen }) {
  const { t } = useTranslation();
  const { id, variant, image, video, portrait, stack, liveUrl, sourceUrl, paperUrl } = project;
  const copy = t(`projects.items.${id}`, { returnObjects: true });
  const labels = t("projects.labels", { returnObjects: true });

  const isPrivate = variant === "private";
  const isSandbox = variant === "sandbox";
  const isPaper = variant === "paper";
  const hasActions = !isPrivate && !isSandbox && (liveUrl || sourceUrl || paperUrl);

  const tag = isPrivate ? labels.private : isSandbox ? "sandbox" : isPaper ? "paper" : variant;

  return (
    <Box
      className="card"
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 300ms",
        "&:hover": { backgroundColor: "#16161b" },
        "&:hover .card-arrow": { color: "primary.main", transform: "translateX(3px)" },
      }}
    >
      <Box
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onOpen();
        }}
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1, cursor: "pointer" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1.25,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography component="span" className="mono" sx={{ color: "primary.main" }}>
            {String(index).padStart(2, "0")}
          </Typography>
          <Typography component="span" className="mono" sx={{ color: "secondary.main" }}>
            {tag}
          </Typography>
        </Stack>

        {isPrivate ? (
          <IconPlaceholder Icon={LockOutlinedIcon} label={labels.private} />
        ) : isSandbox ? (
          <IconPlaceholder Icon={SportsEsportsOutlinedIcon} label="sandbox" />
        ) : isPaper ? (
          <IconPlaceholder Icon={ArticleOutlinedIcon} label="paper" />
        ) : (
          <Media image={image} video={video} alt={copy.title} portrait={portrait} seed={id} />
        )}

        <Box sx={{ p: 2.25, display: "flex", flexDirection: "column", gap: 1.25, flex: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: 800, fontSize: "1.15rem", textTransform: "none", letterSpacing: "-0.01em" }}
          >
            {copy.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "primary.light", fontStyle: "italic", fontWeight: 500, fontSize: "0.92rem" }}>
            {copy.tagline}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.6, fontSize: "0.88rem" }}>
            {copy.description}
          </Typography>
          <StackChips items={stack} />
          <Box sx={{ mt: "auto", pt: 1, display: "flex", justifyContent: "flex-end" }}>
            <Typography
              component="span"
              className="card-arrow"
              sx={{ color: "text.secondary", transition: "transform 140ms, color 140ms", fontSize: "1.1rem" }}
            >
              →
            </Typography>
          </Box>
        </Box>
      </Box>

      {hasActions && (
        <Stack direction="row" spacing={0} sx={{ borderTop: "1px solid", borderColor: "divider" }}>
          {liveUrl && (
            <Button
              variant="text"
              size="small"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon fontSize="small" />}
              onClick={(e) => e.stopPropagation()}
              sx={{ flex: 1, borderRadius: 0, color: "primary.main", py: 1, borderRight: "1px solid", borderColor: "divider" }}
            >
              {labels.demo}
            </Button>
          )}
          {sourceUrl && (
            <Button
              variant="text"
              size="small"
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon fontSize="small" />}
              onClick={(e) => e.stopPropagation()}
              sx={{ flex: 1, borderRadius: 0, color: "text.secondary", py: 1 }}
            >
              {labels.source}
            </Button>
          )}
          {paperUrl && (
            <Button
              variant="text"
              size="small"
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon fontSize="small" />}
              onClick={(e) => e.stopPropagation()}
              sx={{ flex: 1, borderRadius: 0, color: "primary.main", py: 1 }}
            >
              {labels.paper}
            </Button>
          )}
        </Stack>
      )}
    </Box>
  );
}
