import { Grid, Typography } from "@mui/material";
import  { ChangeEvent, useState,useId } from "react";

import TextInputComp from "../../coreUI/TextInputComp/TextInputComp";
import Button from "@mui/material/Button";
import {isEmpty} from 'lodash'

type Props = {};

const TranslateWrapper = (props: Props) => {
  const [OriginText, setOriginText] = useState<string>("");
  const [translateText, setTranslatText] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOriginText(e.target.value);
  };

  const handleTranslate = () => {
    setTranslatText(OriginText);

  };
  return (
    <Grid
      item
      container
      xs={12}
      spacing={5}
      textAlign={"center"}
      display={"flex"}
      sx={{ mt: "5%" ,mb:'5%'}}
    >
      <Grid item md={6} xs={12}>
        <Typography variant="subtitle2" gutterBottom>
          Original text
        </Typography>
        <TextInputComp
          value={OriginText}
          handleOnChange={handleChange}
          name="origin"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="subtitle2" gutterBottom>
          Easy Language
        </Typography>
        <TextInputComp
          value={translateText}
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
          disabled={isEmpty(OriginText)}
        >
          Translate
        </Button>
      </Grid>
    </Grid>
  );
};

export default TranslateWrapper;
