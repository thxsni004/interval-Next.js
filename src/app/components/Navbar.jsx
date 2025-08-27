"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const routes = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#311931ff" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
   
        <Typography variant="h6" component="div">
          Interval
        </Typography>

        {/* nav item */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {routes.map((route) => (
            <Button
              key={route.path}
              component={Link}
              href={route.path}
              sx={{
                color: pathName === route.path ? "#9e7b8eff" : "#dbd3d3ff",
              }}
            >
              {route.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
