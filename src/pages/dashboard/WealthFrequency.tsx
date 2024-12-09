import { Box, Typography, Paper } from "@mui/material";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";

const WealthFrequency = () => {
  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Track Your Wealth Frequency
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 800, margin: "0 auto", color: "#555" }}
        >
          Discover how your financial health evolves through visual insights,
          and how personalized audio programs are optimizing your neural
          pathways to enhance your wealth frequency.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {/* Card 1 */}
        <Paper
          sx={{
            flex: "1 1 calc(50% - 16px)",
            minWidth: "300px",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ marginBottom: 2, textAlign: "center" }}
          >
            Wealth Frequency Overview
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: 2, textAlign: "center" }}
          >
            Visualize how your neural optimization journey is enhancing your
            wealth frequency.
          </Typography>
          <LineChart />
          <Typography
            variant="body2"
            sx={{ marginTop: 2, textAlign: "center" }}
          >
            <i>
              Track improvements over time and monitor the changes in your
              financial patterns.
            </i>
          </Typography>
        </Paper>

        {/* Card 2 */}
        <Paper
          sx={{
            flex: "1 1 calc(50% - 16px)",
            minWidth: "300px",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Detailed Insights
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: "50px", textAlign: "center" }}
          >
            Explore how personalized audio programs are shaping your brain's
            financial patterns.
          </Typography>
          <PieChart />
          <Typography
            variant="body2"
            sx={{ marginTop: 2, textAlign: "center" }}
          >
            <i>
              Hover over the chart to uncover detailed insights and unlock your
              full potential.
            </i>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default WealthFrequency;
