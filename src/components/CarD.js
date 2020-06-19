import React from "react";
import { Card, Button, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { CardActions, Grid, Cell } from "react-mdl";
import { useTranslation } from "react-i18next";

const CarD = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <Grid className="demo-grid-ruler">
        <Cell col={3} phone={6} tablet={3}>
          <Card>
            <CardTitle
              style={{
                height: "176px",
                background:
                  "url(https://cache.magazine-avantages.fr/data/photo/w1000_ci/5g/skip_care_soin_visage_tendance_beaute_peau_minimaliste_routine_utiliser_moins_de_produits_cosmetiques.webp) center / cover",
              }}
            >
              <h4 className="text-center text-Dark text-title">
                {t("FACE CARE.1")}
              </h4>
            </CardTitle>
            <CardActions className="text-center" border>
              <Link to="/ProductList">
                <Button outline color="primary">
                  {t("Go To The Store.1")}
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={3} phone={6} tablet={3}>
          <Card>
            <CardTitle
              style={{
                height: "176px",
                background:
                  "url(https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fbeaute.2Fcoiffure.2Fastuces-cheveux.2Fcheveux-secs-hydratation-48725.2F14914782-2-fre-FR.2Fcheveux-secs-5-astuces-hyper-efficaces-pour-les-hydrater.2Ejpg/850x478/quality/90/crop-from/center/cheveux-secs-5-astuces-hyper-efficaces-pour-les-hydrater.jpeg) center / cover",
              }}
            >
              <h4 className="text-center text-Dark text-title">
                {t("HAIR CARE.1")}
              </h4>
            </CardTitle>
            <CardActions className="text-center" border>
              <Link to="/ProductCosmitic">
                <Button outline color="warning">
                  {t("Go To The Store.1")}
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={3} phone={6} tablet={3}>
          <Card>
            <CardTitle
              style={{
                height: "176px",
                background:
                  "url(https://www.tennovawellness.com/wp-content/uploads/2018/02/skin-moles-870x430.jpg) center / cover",
              }}
            >
              <h4 className="text-center text-Dark text-title">
                {t("BODY CARE.1")}
              </h4>
            </CardTitle>
            <CardActions className="text-center" border>
              <Link to="/BodyCare">
                <Button outline color="success">
                  {t("Go To The Store.1")}
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={3} phone={6} tablet={3}>
          <Card>
            <CardTitle
              style={{
                height: "176px",
                background:
                  "url(https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1446569757455-TLGGCWODO61TPD9473QZ/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/image-asset.jpeg?format=1000w) center / cover",
              }}
            >
              <h4 className="text-center text-Dark text-title">
                {t("HEALTHY FOOD.1")}
              </h4>
            </CardTitle>
            <CardActions className="text-center" border>
              <Link to="/HealthyFood">
                <Button outline color="info">
                  {t("Go To The Store.1")}
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
      </Grid>
    </div>
  );
};

export default CarD;
