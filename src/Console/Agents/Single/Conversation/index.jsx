import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { WhatsApp, KeyboardVoice, LaptopMac } from "@mui/icons-material";

const fetcher = ({ queryKey }) => {
  const { sessionId } = queryKey[1];
  const url = `${import.meta.env.VITE_BASE_URL}/client/history/${sessionId}`;
  return axios.get(url).then(({ data }) => data);
};
const Conversation = () => {
  const { sessionId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["conversation", { sessionId }],
    queryFn: fetcher,
  });

  if (isLoading) return <Typography>Loading ...</Typography>;

  if (isError) return <Typography>Something went wrong</Typography>;

  return (
    <Stack gap={1}>
      {data.map((item) => (
        <Chat item={item} key={item.id} />
      ))}
    </Stack>
  );
};

export default Conversation;

const Chat = ({ item }) => (
  <Stack alignSelf={item._from === "user" ? "start" : "end"} p={1}>
    <Box
      bgcolor={item._from === "user" ? "#f5f5f5" : "transparent"}
      borderRadius={2}
      p={1}
    >
      <Typography fontSize={"small"} alignSelf={"end"}>
        {format(new Date(item.createdAt), "dd MMM yyyy hh:mm aaa")}
      </Typography>
      <Typography p={1}>{item.text}</Typography>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        {item.channel === "whatsapp" ? (
          <WhatsApp sx={{ fontSize: 18 }} />
        ) : (
          <LaptopMac sx={{ fontSize: 18 }} />
        )}
        {item.channel === "whatsapp" && (
          <Typography>{item.whatsapp}</Typography>
        )}
        {item.mode === "audio" && <KeyboardVoice sx={{ fontSize: 18 }} />}
      </Stack>
    </Box>
  </Stack>
);
