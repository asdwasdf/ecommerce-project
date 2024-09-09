import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const BreadcrumbsComponent = ({ paths }) => {
  return (
    <div style={{ background: "#f1f1f1" }}>
      <div className="container" style={{ padding: "20px", width: "100%" }}>
        <Breadcrumbs aria-label="breadcrumb">
          {paths.map((path, index) =>
            index !== paths.length - 1 ? (
              <Link
                key={index}
                color="inherit"
                href={path.link}
                sx={{
                  fontSize: "15px",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline"
                  }
                }}>
                {path.name}
              </Link>
            ) : (
              <Typography key={index} color="textPrimary" sx={{ fontSize: "15px" }}>
                {path.name}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default BreadcrumbsComponent;
