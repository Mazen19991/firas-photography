import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import doubleQuotations from "../../../Assets/doubleQuotations.png";
import avatarStyle from "./Avatars.module.css";

const ActiveAvatarStyled = styled(Avatar)(({ theme }) => ({
  width: 75,
  height: 75,
  backgroundColor: theme.palette.primary.main,
  opacity: "1",
  "&:hover": {
    cursor: "pointer",
  },
}));

const InActiveAvatarStyled = styled(Avatar)(({ theme }) => ({
  width: 75,
  height: 75,
  backgroundColor: theme.palette.primary.main,
  opacity: "0.5",
  "&:hover": {
    cursor: "pointer",
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 25,
  height: 25,
  backgroundColor: "#C69E50",
}));

interface AvatarsProps {
  selectedAvatar: number;
  onAvatarChange: (number: number) => void;
}

const Avatars: FC<AvatarsProps> = ({ selectedAvatar, onAvatarChange }) => {

  return (
    <Stack direction="row" spacing={2}>
      <div
        onClick={() => onAvatarChange(1)}
        className={avatarStyle.AvatarContainer}
      >
        {selectedAvatar === 1 ? (
          <>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar>
                  <img
                    src={doubleQuotations}
                    alt="Quotations"
                    style={{ width: 12.5, height: 10 }}
                  />
                </SmallAvatar>
              }
            >
              <ActiveAvatarStyled
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "75px", height: "75px" }}
              />
            </Badge>
            <p>Angela Molie</p>
          </>
        ) : (
          <>
            <InActiveAvatarStyled
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: "75px", height: "75px" }}
            />
          </>
        )}
      </div>
      <div
        onClick={() => onAvatarChange(2)}
        className={avatarStyle.AvatarContainer}
      >
        {selectedAvatar === 2 ? (
          <>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar>
                  <img
                    src={doubleQuotations}
                    alt="Quotations"
                    style={{ width: 12.5, height: 10 }}
                  />
                </SmallAvatar>
              }
            >
              <ActiveAvatarStyled
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "75px", height: "75px" }}
              />
            </Badge>
            <p>Angela Molie</p>
          </>
        ) : (
          <>
            <InActiveAvatarStyled
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: "75px", height: "75px" }}
            />
          </>
        )}
      </div>
      <div
        onClick={() => onAvatarChange(3)}
        className={avatarStyle.AvatarContainer}
      >
        {selectedAvatar === 3 ? (
          <>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar>
                  <img
                    src={doubleQuotations}
                    alt="Quotations"
                    style={{ width: 12.5, height: 10 }}
                  />
                </SmallAvatar>
              }
            >
              <ActiveAvatarStyled
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "75px", height: "75px" }}
              />
            </Badge>
            <p>Angela Molie</p>
          </>
        ) : (
          <>
            <InActiveAvatarStyled
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: "75px", height: "75px" }}
            />
          </>
        )}
      </div>
    </Stack>
  );
};

export default Avatars;
