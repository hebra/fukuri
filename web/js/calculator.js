/**
 * Compound Interest Calculator
 *
 * Formula for Compound Interest with Regular Contributions:
 * A = P(1 + r/n)^(nt) + PMT * (((1 + r/n)^(nt) - 1) / (r/n))
 *
 * A   = the future value of the investment/loan, including interest
 * P   = the principal investment amount (initial deposit)
 * r   = the annual interest rate (decimal)
 * n   = the number of times that interest is compounded per unit t
 * t   = the time the money is invested or borrowed for
 * PMT = the monthly contribution
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("interest-rate");
  const rateDisplay = document.getElementById("interest-rate-display");
  const periodInput = document.getElementById("period");
  const periodDisplay = document.getElementById("period-display");
  const contributionInput = document.getElementById("contribution");
  const frequencySelect = document.getElementById("frequency");
  const compoundingSelect = document.getElementById("compounding");
  const totalGrowthDisplay = document.getElementById("total-growth");
  const totalContributionsDisplay = document.getElementById(
    "total-contributions",
  );
  const chartLine = document.getElementById("chart-line");
  const chartArea = document.getElementById("chart-area");
  const chartEndDot = document.getElementById("chart-end-dot");
  const chartEndGlow = document.getElementById("chart-end-glow");
  const xAxisLabels = document.querySelector(".x-axis-labels");

  // Initial Calculation
  updateDisplays();
  calculate();

  // Event Listeners
  [
    principalInput,
    rateInput,
    periodInput,
    contributionInput,
    frequencySelect,
    compoundingSelect,
  ].forEach((input) => {
    input.addEventListener("input", () => {
      updateDisplays();
      calculate();
    });
  });

  /**
   * Update range value displays
   */
  function updateDisplays() {
    rateDisplay.textContent = `${rateInput.value}%`;
    periodDisplay.innerHTML =
      `${periodInput.value} <span class="range-unit">Years</span>`;
  }

  /**
   * Perform calculation and update DOM
   */
  function calculate() {
    const P = parseFloat(principalInput.value) || 0;
    const annualRate = parseFloat(rateInput.value) / 100;
    const t = parseFloat(periodInput.value);
    const PMT = parseFloat(contributionInput.value) || 0;
    const frequency = frequencySelect.value;
    const compoundingFrequency = compoundingSelect.value;

    // Mapping frequency to periods per year
    const frequencyMap = {
      "daily": 365,
      "weekly": 52,
      "monthly": 12,
      "quarterly": 4,
      "semi-annually": 2,
      "annually": 1,
    };

    const n = frequencyMap[frequency];
    const compoundingN = frequencyMap[compoundingFrequency];

    const totalContributions = PMT * n * t;
    const yearlyData = [];

    for (let year = 0; year <= t; year++) {
      if (year === 0) {
        yearlyData.push({ year: 0, amount: P });
        continue;
      }

      // We calculate value at the end of each year
      // To keep it simple we'll calculate it annually using the formula
      const periodicRate = annualRate / compoundingN;
      const periodsInYear = compoundingN * year;

      const FV_P = P * Math.pow(1 + periodicRate, periodsInYear);
      let FV_PMT = 0;
      if (annualRate > 0) {
        // PMT per contribution period. We need to convert it if compounding matches PMT frequency
        // Here we assume for the chart that contributions and compounding are as selected.
        // If compounding and contribution frequency differ, the formula is more complex.
        // For simplicity we assume they align or we adjust PMT to the compounding frequency.
        const contributionPerCompoundingPeriod = (PMT * n) / compoundingN;
        FV_PMT = contributionPerCompoundingPeriod *
          ((Math.pow(1 + periodicRate, periodsInYear) - 1) / periodicRate);
      } else {
        FV_PMT = (PMT * n) * year;
      }

      yearlyData.push({ year, amount: FV_P + FV_PMT });
    }

    const totalAmount = yearlyData[yearlyData.length - 1].amount;
    displayResults(totalAmount, totalContributions);
    updateChart(yearlyData, t);
    updateLabels(t);
  }

  /**
   * Display results in the UI
   */
  function displayResults(total, contributions) {
    totalGrowthDisplay.textContent = formatCurrency(total);
    totalContributionsDisplay.textContent = formatCurrency(contributions);
  }

  /**
   * Update the SVG chart
   */
  function updateChart(data, years) {
    if (data.length < 2) return;

    const maxAmount = data[data.length - 1].amount;
    const width = 1000;
    const height = 400;

    // We want the chart to go from 0 to width (x) and height to 0 (y)
    // Actually y=0 is top, y=400 is bottom.

    let pathData = `M 0,${height}`;

    data.forEach((point, index) => {
      const x = (point.year / years) * width;
      const y = height - (point.amount / maxAmount) * (height - 20); // leave 20px padding at top

      if (index === 0) {
        pathData = `M ${x},${y}`;
      } else {
        pathData += ` L ${x},${y}`;
      }

      // Update dot and glow position if last point
      if (index === data.length - 1) {
        chartEndDot.setAttribute("cx", x);
        chartEndDot.setAttribute("cy", y);
        chartEndGlow.setAttribute("cx", x);
        chartEndGlow.setAttribute("cy", y);
      }
    });

    chartLine.setAttribute("d", pathData);

    // For area path, add lines to close the shape
    const areaPath = pathData + ` L ${width},${height} L 0,${height} Z`;
    chartArea.setAttribute("d", areaPath);
  }

  /**
   * Update X-axis labels
   */
  function updateLabels(years) {
    const labels = xAxisLabels.querySelectorAll("span");
    const interval = years / (labels.length - 1);
    labels.forEach((label, index) => {
      label.textContent = `Year ${Math.round(index * interval)}`;
    });
  }

  /**
   * Format number as currency
   */
  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }
});
