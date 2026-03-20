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
  InputLabel,
  Paper,
  Badge,
} from "@mui/material";

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
    avatarSize: 42,
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

  // 📸 upload image
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
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                pl: "calc((100% - 300px) / 2)",
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
                    {/* LEFT: Avatar + Upload */}
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
                          profileSettings.isOnline ? (
                            <Box
                              sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                bgcolor: "success.main",
                                border: "2px solid white",
                              }}
                            />
                          ) : null
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

                      {/* Upload strictly under the avatar */}
                      <Button
                        variant="text"
                        component="label"
                        size="small"
                        sx={{
                          fontSize: "10px",
                          minWidth: "auto",
                          padding: "2px 6px",
                          textTransform: "none",
                          lineHeight: 1,
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

                    {/* RIGHT: Name + Status */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 600 }}>
                        {profileSettings.name} {profileSettings.surname}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
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
                  {/* Role */}
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: 5, alignSelf: "flex-start" }}
                  >
                    {getRole()}
                  </Button>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    color={profileSettings.buttonColor}
                  >
                    MESSAGE
                  </Button>

                  <Button sx={{ flex: 1 }} variant="outlined" size="small">
                    OFFER JOB
                  </Button>
                </CardActions>

                {profileSettings.showAlert && (
                  <Box sx={{ px: 2, pb: 2 }}>
                    {/* MAIN ALERT */}
                    <Alert
                      severity="info"
                      action={
                        <Button
                          color="inherit"
                          size="small"
                          onClick={() => alert("Thanks for reading!")}
                        >
                          Got it
                        </Button>
                      }
                      sx={{
                        mb: 1,
                        animation: "pulse 2s infinite",
                        "@keyframes pulse": {
                          "0%,100%": { opacity: 1 },
                          "50%": { opacity: 0.7 },
                        },
                      }}
                    >
                      Don't forget to upload your avatar!
                    </Alert>

                    {/* 🔥 MULTI ALERT BLOCK */}
                    <Stack spacing={1}>
                      <Alert severity="success">Great! MUI is working</Alert>

                      <Alert severity="info">Try changing button colors</Alert>

                      <Alert severity="warning">Don't forget about props</Alert>

                      <Alert severity="error">
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
              {/* NAME */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Name"
                  value={profileSettings.name}
                  onChange={(e) => update("name", e.target.value)}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Surname"
                  value={profileSettings.surname}
                  onChange={(e) => update("surname", e.target.value)}
                  size="small"
                  fullWidth
                />
              </Box>

              {/* SELECT */}
              <FormControl fullWidth size="small">
                <InputLabel>Occupation</InputLabel>
                <Select
                  value={profileSettings.occupation}
                  label="Occupation"
                  onChange={(e) => update("occupation", e.target.value)}
                >
                  {roles.map((r) => (
                    <MenuItem key={r.value} value={r.value}>
                      {r.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* SLIDER */}
              <Box>
                <Typography variant="body2">
                  Avatar size: {profileSettings.avatarSize}px
                </Typography>
                <Slider
                  value={profileSettings.avatarSize}
                  onChange={(_, v) => update("avatarSize", v)}
                  min={40}
                  max={120}
                />
              </Box>

              {/* COLOR */}
              <FormControl>
                <FormLabel>Button Color</FormLabel>
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
                      label={c}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* SWITCH */}
              <FormControlLabel
                control={
                  <Switch
                    checked={profileSettings.isOnline}
                    onChange={(e) => update("isOnline", e.target.checked)}
                  />
                }
                label="Online status"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={profileSettings.showAlert}
                    onChange={(e) => update("showAlert", e.target.checked)}
                  />
                }
                label="Show alert"
              />

              {/* CARD STYLE */}
              <FormControl>
                <FormLabel>Card Style</FormLabel>
                <RadioGroup
                  row
                  value={profileSettings.cardVariant}
                  onChange={(e) => update("cardVariant", e.target.value)}
                >
                  <FormControlLabel
                    value="elevation"
                    control={<Radio size="small" />}
                    label="Shadow"
                  />
                  <FormControlLabel
                    value="outlined"
                    control={<Radio size="small" />}
                    label="Border"
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
