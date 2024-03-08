import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Buttons from "../../shared/Buttons";
import { Container, Typography } from "@mui/material";
import style from '../../shared/shared.module.css'
export default function MainPage_2() {
  return (
    <Box sx={{pb:5}}>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 7 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: "200",
                mx: "auto",
                textAlign: "center",
              }}
            >
              <Box>
                <Box sx={{position:"relative",pb:3, width:"100%"}}>
                <Typography variant="h2" sx={{fontSize: { xs: "24px", sm: "32px", md: "30px" }, fontWeight: "900" }}>We are university since 17 years</Typography>
                
                <Box sx={{width:"100%"}} className={`${style.border}`}></Box>
                </Box>
                <Typography sx={{ mt: { xs: 4, lg: 3 } }}>
                  Palestine Technical University, also known as Kadoorie University; It is a Palestinian university located in the city of Tulkarm. It is considered one of the oldest and most prominent universities of the State of Palestine. It is the first and only government university in the West Bank. It was founded in the city of Tulkarm in 1930 as an institute for serving the neighboring regional Palestine, and then the University of Palestine began. A university that is a member of the International Union of Universities, the Association of Arab Universities, the Association of Public Universities, the Federation of the Universities of the Islamic World, the Association of Arab Universities, and others.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 2, md: 1, lg: 3 } }}>
                  <Buttons
                    title={"learn more"}
                    link={"https://en.wikipedia.org/wiki/Palestine_Technical_University_%E2%80%93_Kadoorie"}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={6}>
              <Box sx={{ flexGrow: 1,mt:{md:4,lg:2}}}>
                <Grid container spacing={{ md: 1, xs: 1 }}>
                  <Grid item xs={6} md={6} sx={{ height: 200 }}>
                    <img
                      src={"image/Eng-building2.jpg"}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover",  boxShadow: "4px 4px 8px 5px rgba(0, 0, 0, 0.2)" }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sx={{ height: 200 }}>
                    <img
                      src={"image/main2.jpeg"}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", boxShadow: "4px 4px 8px 5px rgba(0, 0, 0, 0.2)" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ height: 200 }}>
                    <img
                      src={"image/Eng-building3.jpg"}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", boxShadow: "2px 1px 8px 5px rgba(0, 0, 0, 0.4)" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ height: 200 }}>
                    <img
                      src={"image/university.jpg"}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", boxShadow: "4px 4px 8px 5px rgba(0, 0, 0, 0.4)" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ height: 200 }}>
                    <img
                      src={"image/seat.jpg"}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", boxShadow: "2px 1px 8px 5px rgba(0, 0, 0, 0.4)" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
