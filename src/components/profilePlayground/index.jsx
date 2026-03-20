import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  TextField,
  Stack,
  Switch,
  Alert,
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  Checkbox,
  Select,
  MenuItem,
  Paper,
  Badge,
} from "@mui/material";

const FONT_SIZE = 12;

const roles = [
  { value: "developer", label: "💻 Developer" },
  { value: "designer", label: "🎨 Designer" },
  { value: "manager", label: "📊 Manager" },
  { value: "analyst", label: "📈 Analyst" },
];

const ProfilePlayground = () => {
  const [profileSettings, setProfileSettings] = useState({
    name: "Anna",
    surname: "Petrova",
    avatarSize: 45,
    buttonColor: "primary",
    buttonSize: "medium",
    isOnline: false,
    showAlert: false,
    occupation: "developer",
    cardVariant: "elevation",
    avatarUrl: null,
  });

  const update = (field, value) => {
    setProfileSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getInitials = () =>
    `${profileSettings.name?.[0] || ""}${
      profileSettings.surname?.[0] || ""
    }`.toUpperCase();

  const getRole = () =>
    roles.find((r) => r.value === profileSettings.occupation)?.label;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    update("avatarUrl", url);
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", p: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* LEFT */}
          <Paper sx={{ flex: "0 0 40%", p: 3 }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                pl: "calc((100% - 300px) / 2)",
                fontSize: 14,
              }}
            >
              👤 Profile Card
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                variant={profileSettings.cardVariant}
                elevation={profileSettings.cardVariant === "elevation" ? 3 : 0}
                sx={{
                  width: 300,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {/* HEADER */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {/* Avatar + Upload */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent={
                          profileSettings.isOnline && (
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                bgcolor: "success.main",
                                border: "2px solid white",
                              }}
                            />
                          )
                        }
                      >
                        <Avatar
                          src={profileSettings.avatarUrl || undefined}
                          sx={{
                            width: profileSettings.avatarSize,
                            height: profileSettings.avatarSize,
                            bgcolor: "primary.main",
                            fontSize: profileSettings.avatarSize / 2.5,
                          }}
                        >
                          {!profileSettings.avatarUrl && getInitials()}
                        </Avatar>
                      </Badge>

                      <Button
                        variant="text"
                        component="label"
                        size="small"
                        sx={{
                          fontSize: 10,
                          minWidth: "auto",
                          p: "2px 6px",
                          textTransform: "none",
                        }}
                      >
                        Upload foto
                        <input
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </Button>
                    </Box>

                    {/* Name + Status */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 600, fontSize: 13 }}>
                        {profileSettings.name} {profileSettings.surname}
                      </Typography>

                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          fontSize: 12,
                          color: profileSettings.isOnline
                            ? "success.main"
                            : "text.secondary",
                        }}
                      >
                        {profileSettings.isOnline ? "●" : "○"}
                        {profileSettings.isOnline ? "Online" : "Offline"}
                      </Typography>
                    </Box>
                  </Box>

                  {/* ROLE */}
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: 5,
                      fontSize: 11,
                      alignSelf: "flex-start",
                    }}
                  >
                    {getRole()}
                  </Button>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    color={profileSettings.buttonColor}
                    sx={{ fontSize: 11 }}
                  >
                    MESSAGE
                  </Button>

                  <Button
                    sx={{ flex: 1, fontSize: 11 }}
                    variant="outlined"
                    size="small"
                  >
                    OFFER JOB
                  </Button>
                </CardActions>

                {profileSettings.showAlert && (
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Alert
                      severity="info"
                      sx={{ mb: 1, fontSize: 12 }}
                      action={
                        <Button size="small" sx={{ fontSize: 10 }}>
                          Got it
                        </Button>
                      }
                    >
                      Don't forget to upload your avatar!
                    </Alert>

                    <Stack spacing={1}>
                      <Alert severity="success" sx={{ fontSize: 12 }}>
                        Great! MUI is working
                      </Alert>
                      <Alert severity="info" sx={{ fontSize: 12 }}>
                        Try changing button colors
                      </Alert>
                      <Alert severity="warning" sx={{ fontSize: 12 }}>
                        Don't forget about props
                      </Alert>
                      <Alert severity="error" sx={{ fontSize: 12 }}>
                        No errors, everything is fine!
                      </Alert>
                    </Stack>
                  </Box>
                )}
              </Card>
            </Box>
          </Paper>

          {/* RIGHT */}
          <Paper sx={{ flex: 1, p: 3 }}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  size="small"
                  fullWidth
                  value={profileSettings.name}
                  onChange={(e) => update("name", e.target.value)}
                  InputProps={{ sx: { fontSize: FONT_SIZE } }}
                />
                <TextField
                  size="small"
                  fullWidth
                  value={profileSettings.surname}
                  onChange={(e) => update("surname", e.target.value)}
                  InputProps={{ sx: { fontSize: FONT_SIZE } }}
                />
              </Box>

              <FormControl fullWidth size="small">
                <Select
                  value={profileSettings.occupation}
                  onChange={(e) => update("occupation", e.target.value)}
                  sx={{ fontSize: FONT_SIZE }}
                >
                  {roles.map((r) => (
                    <MenuItem
                      key={r.value}
                      value={r.value}
                      sx={{ fontSize: FONT_SIZE }}
                    >
                      {r.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box>
                <Typography sx={{ fontSize: FONT_SIZE }}>
                  Avatar size: {profileSettings.avatarSize}px
                </Typography>
                <Slider
                  size="small"
                  value={profileSettings.avatarSize}
                  onChange={(_, v) => update("avatarSize", v)}
                />
              </Box>

              <FormControl>
                <FormLabel sx={{ fontSize: FONT_SIZE }}>Button Color</FormLabel>
                <RadioGroup
                  row
                  value={profileSettings.buttonColor}
                  onChange={(e) => update("buttonColor", e.target.value)}
                >
                  {["primary", "secondary", "success", "error"].map((c) => (
                    <FormControlLabel
                      key={c}
                      value={c}
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: FONT_SIZE }}>
                          {c}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={profileSettings.isOnline}
                    onChange={(e) => update("isOnline", e.target.checked)}
                  />
                }
                label={
                  <Typography sx={{ fontSize: FONT_SIZE }}>Online</Typography>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={profileSettings.showAlert}
                    onChange={(e) => update("showAlert", e.target.checked)}
                  />
                }
                label={
                  <Typography sx={{ fontSize: FONT_SIZE }}>
                    Show alert
                  </Typography>
                }
              />

              <FormControl>
                <FormLabel sx={{ fontSize: FONT_SIZE }}>Card Style</FormLabel>
                <RadioGroup
                  row
                  value={profileSettings.cardVariant}
                  onChange={(e) => update("cardVariant", e.target.value)}
                >
                  <FormControlLabel
                    value="elevation"
                    control={<Radio size="small" />}
                    label={
                      <Typography sx={{ fontSize: FONT_SIZE }}>
                        Shadow
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="outlined"
                    control={<Radio size="small" />}
                    label={
                      <Typography sx={{ fontSize: FONT_SIZE }}>
                        Border
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePlayground;
