import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Props } from "./ArtistCardSmallType";
import colors from "../../config/colors";

const ArtistCardSmall: FC<Props> = ({ artist }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: artist.image }} style={styles.profileImageStyle} />
      <Text style={styles.nameTextStyle}>{artist.name}</Text>
    </TouchableOpacity>
  );
};

export default ArtistCardSmall;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 7,
  },
  profileImageStyle: { width: 60, height: 60, borderRadius: 50 },
  nameTextStyle: { color: colors.white, fontSize: 12, fontWeight: "500" },
});
