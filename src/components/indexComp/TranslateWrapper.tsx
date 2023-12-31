import { Grid, Typography } from "@mui/material";
import { useContext } from "react";

import TextInputComp from "../../coreUI/TextInputComp/TextInputComp";
import Button from "@mui/material/Button";
import { isEmpty } from "lodash";
import { HomeContext } from "../../../pages";
import { ulid } from "ulid";

type Props = {};

const TranslateWrapper = (props: Props) => {
  const { handleChange, displayText, setDisplayText, handleUpdateList } =
    useContext(HomeContext);

  const handleTranslate = () => {
    let listItem = {
      ...displayText,
      id:ulid(),
      trans: displayText.origin,
    };
    setDisplayText(listItem);
    handleUpdateList(listItem);
  };
  return (
    <Grid
      item
      container
      xs={12}
      spacing={5}
      textAlign={"center"}
      display={"flex"}
      sx={{ mt: "5%", mb: "5%" }}
    >
      <Grid item md={6} xs={12}>
        <Typography variant="subtitle2" gutterBottom>
          Original text
        </Typography>
        <TextInputComp
          value={displayText.origin}
          handleOnChange={handleChange}
          name="origin"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="subtitle2" gutterBottom>
          Easy Language
        </Typography>
        <TextInputComp
          value={displayText.trans}
          handleOnChange={handleChange}
          name="translate"
          disable={true}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleTranslate}
          sx={{ textTransform: "capitalize" }}
          disabled={isEmpty(displayText.origin)}
        >
          Translate
        </Button>
      </Grid>
    </Grid>
  );
};

export default TranslateWrapper;
