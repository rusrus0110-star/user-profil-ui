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
    avatarSize: 60,
    buttonColor: "primary",
    buttonSize: "medium",
    isOnline: false,
    showAlert: true,
    occupation: "developer",
    cardVariant: "elevation",
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
    pl: "calc((100% - 300px) / 2)", // 🔥 ключ
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
                  border:
                    profileSettings.cardVariant === "outlined"
                      ? "1px solid #e0e0e0"
                      : "none",
                  transition: "0.3s",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {/* HEADER */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar
                      sx={{
                        width: profileSettings.avatarSize,
                        height: profileSettings.avatarSize,
                        bgcolor: "primary.main",
                        fontSize: profileSettings.avatarSize / 2.5,
                        fontWeight: 600,
                      }}
                    >
                      {getInitials()}
                    </Avatar>

                    {/* NAME + STATUS */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                        {profileSettings.name} {profileSettings.surname}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          lineHeight: 1.2,
                          mt: 0.3,
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: profileSettings.isOnline
                            ? "success.main"
                            : "text.secondary",
                        }}
                      >
                        <Box component="span">
                          {profileSettings.isOnline ? "●" : "○"}
                        </Box>
                        {profileSettings.isOnline ? "Online" : "Offline"}
                      </Typography>
                    </Box>
                  </Box>

                  {/* ROLE BUTTON */}
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      alignSelf: "flex-start",
                      borderRadius: 5,
                      textTransform: "none",
                    }}
                  >
                    {getRole()}
                  </Button>
                </CardContent>

                {/* ACTIONS */}
                <CardActions
                  sx={{
                    px: 2,
                    pb: 2,
                    gap: 1,
                    display: "flex",
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    color={profileSettings.buttonColor}
                  >
                    MESSAGE
                  </Button>

                  <Button variant="outlined" size="small" sx={{ flex: 1 }}>
                    OFFER JOB
                  </Button>
                </CardActions>

                {profileSettings.showAlert && (
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Alert severity="info">Looking for interns</Alert>
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
              <FormControl size="small" fullWidth>
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
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Avatar size: {profileSettings.avatarSize}px
                </Typography>

                <Slider
                  size="small"
                  value={profileSettings.avatarSize}
                  onChange={(_, v) => update("avatarSize", v)}
                  min={40}
                  max={120}
                />
              </Box>

              {/* COLOR */}
              <FormControl>
                <FormLabel sx={{ fontSize: 13 }}>Button Color</FormLabel>

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

              {/* SIZE */}
              <FormControl>
                <FormLabel sx={{ fontSize: 13 }}>Button Size</FormLabel>

                <RadioGroup
                  row
                  value={profileSettings.buttonSize}
                  onChange={(e) => update("buttonSize", e.target.value)}
                >
                  {["small", "medium", "large"].map((s) => (
                    <FormControlLabel
                      key={s}
                      value={s}
                      control={<Radio size="small" />}
                      label={s}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* SWITCH */}
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={profileSettings.isOnline}
                    onChange={(e) => update("isOnline", e.target.checked)}
                  />
                }
                label="Online status"
              />

              {/* ALERT */}
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={profileSettings.showAlert}
                    onChange={(e) => update("showAlert", e.target.checked)}
                  />
                }
                label="Show alert"
              />

              <FormControl>
                <FormLabel sx={{ fontSize: 13 }}>Card Style</FormLabel>

                <RadioGroup
                  row
                  value={profileSettings.cardVariant}
                  onChange={(e) => update("cardVariant", e.target.value)}
                >
                  <FormControlLabel
                    value="elevation"
                    control={<Radio size="small" />}
                    label="Card with shadow"
                  />

                  <FormControlLabel
                    value="outlined"
                    control={<Radio size="small" />}
                    label="Card with border"
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
