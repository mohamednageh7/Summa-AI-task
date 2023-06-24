import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { TransList } from "./fixedData";
import TranslateCardComp from "../../coreUI/TranslateCardComp/TranslateCardComp";


type Props = {};

const ListTranslateView = (props: Props) => {
  const [transList, setTransList] = useState<TransList[] | null>(null);
  useEffect(() => {
    return setTransList(JSON.parse(localStorage.getItem("historyTrans") || ""));
  }, []);
  return (
    <Grid item container xs={12} spacing={3} sx={{mb:'2%'}}>
      <Grid item xs={12} sx={{mb:'10px'}}>
        <Typography variant="subtitle2" gutterBottom>
          List of old transations
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={2} sx={{maxHeight:'30em',overflowY:'scroll'}}>
        {transList &&
          transList.map((item: TransList) => (
            <Grid item xs={3} key={item.id}>
              <TranslateCardComp id={item.id} originText={item.origin} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default ListTranslateView;
