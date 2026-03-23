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

const roles = [
  { value: "developer", label: "💻 Developer" },
  { value: "designer", label: "🎨 Designer" },
  { value: "manager", label: "📊 Manager" },
  { value: "analyst", label: "📈 Analyst" },
];

const ProfilePlayground = ({ primaryColor, setPrimaryColor }) => {
  const [profileSettings, setProfileSettings] = useState({
    name: "Anna",
    surname: "Petrova",
    avatarSize: 45,
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
    `${profileSettings.name?.[0] || ""}${profileSettings.surname?.[0] || ""}`.toUpperCase();

  const getRole = () =>
    roles.find((r) => r.value === profileSettings.occupation)?.label;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    update("avatarUrl", URL.createObjectURL(file));
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        p: 4,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* LEFT */}
          <Paper sx={{ flex: "0 0 40%", p: 3 }}>
            <Typography sx={{ textAlign: "center", mb: 2, fontWeight: 600 }}>
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
                    boxShadow: (theme) => theme.shadows[8],
                  },
                }}
              >
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {/* HEADER */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {/* Avatar */}
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
                                border: (theme) =>
                                  `2px solid ${theme.palette.background.paper}`,
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
                        sx={{ textTransform: "none", fontSize: 11 }}
                      >
                        Upload
                        <input
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </Button>
                    </Box>

                    {/* Name */}
                    <Box>
                      <Typography fontWeight={600}>
                        {profileSettings.name} {profileSettings.surname}
                      </Typography>

                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: profileSettings.isOnline
                            ? "success.main"
                            : "text.secondary",
                        }}
                      >
                        {profileSettings.isOnline ? "● Online" : "○ Offline"}
                      </Typography>
                    </Box>
                  </Box>

                  {/* ROLE */}
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: 5 }}
                  >
                    {getRole()}
                  </Button>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                  <Button variant="contained" size="small">
                    MESSAGE
                  </Button>

                  <Button variant="outlined" size="small" sx={{ flex: 1 }}>
                    OFFER JOB
                  </Button>
                </CardActions>

                {profileSettings.showAlert && (
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Alert severity="info" sx={{ mb: 1 }}>
                      Don't forget to upload your avatar!
                    </Alert>

                    <Stack spacing={1}>
                      <Alert severity="success">MUI works</Alert>
                      <Alert severity="info">Try changing theme</Alert>
                      <Alert severity="warning">Check props</Alert>
                      <Alert severity="error">No errors</Alert>
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
                />
                <TextField
                  size="small"
                  fullWidth
                  value={profileSettings.surname}
                  onChange={(e) => update("surname", e.target.value)}
                />
              </Box>

              <FormControl fullWidth size="small">
                <Select
                  value={profileSettings.occupation}
                  onChange={(e) => update("occupation", e.target.value)}
                >
                  {roles.map((r) => (
                    <MenuItem key={r.value} value={r.value}>
                      {r.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box>
                <Typography>
                  Avatar size: {profileSettings.avatarSize}px
                </Typography>
                <Slider
                  size="small"
                  value={profileSettings.avatarSize}
                  onChange={(_, v) => update("avatarSize", v)}
                />
              </Box>

              {/* chose theme color */}
              <FormControl>
                <FormLabel>Theme Color</FormLabel>

                <Stack direction="row" spacing={1}>
                  {["primary", "secondary", "success", "error"].map((color) => (
                    <Button
                      key={color}
                      variant={
                        primaryColor === color ? "contained" : "outlined"
                      }
                      onClick={() => setPrimaryColor(color)}
                      color={color}
                      size="small"
                    >
                      {color}
                    </Button>
                  ))}
                </Stack>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    checked={profileSettings.isOnline}
                    onChange={(e) => update("isOnline", e.target.checked)}
                  />
                }
                label="Online"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={profileSettings.showAlert}
                    onChange={(e) => update("showAlert", e.target.checked)}
                  />
                }
                label="Show alerts"
              />

              <FormControl>
                <FormLabel>Card Style</FormLabel>
                <Stack direction="row">
                  <FormControlLabel
                    value="elevation"
                    control={
                      <Checkbox
                        checked={profileSettings.cardVariant === "elevation"}
                        onChange={() => update("cardVariant", "elevation")}
                      />
                    }
                    label="Shadow"
                  />
                  <FormControlLabel
                    value="outlined"
                    control={
                      <Checkbox
                        checked={profileSettings.cardVariant === "outlined"}
                        onChange={() => update("cardVariant", "outlined")}
                      />
                    }
                    label="Border"
                  />
                </Stack>
              </FormControl>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePlayground;
