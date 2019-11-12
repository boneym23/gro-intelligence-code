let data = [
  {
    label: "Products",
    href: "/products",
    subnavList: [
      {
        label: "Gro web app",
        href: "/products/gro",
        description:
          "Jump straight into analysis through intuitive visualizations that can be monitored on live dashboards"
      },
      {
        label: "Gro analytics",
        href: "/products/analytics",
        description:
          "Gain a competitive edge by using Gro’s proprietary machine-learning algorithms and predictive models",
        links: [
          {
            title: "US Corn",
            subtitle: "Yield Forecast"
          },
          {
            title: "US Soy",
            subtitle: "Yield Forecast"
          },
          {
            title: "Argentina Soy",
            subtitle: "Yield Forecast"
          }
        ]
      },
      {
        label: "Gro API",
        href: "/products/gro-api",
        description:
          "Gain direct access to Gro’s entire database, including supply, demand, weather, and environment data"
      },
      {
        label: "Gro dictionary",
        href: "/products/gro-dictionary",
        description: "Explore data from our collection of over 8.828M datasets."
      }
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    subnavList: [
      {
        label: "Financial Services"
      },
      {
        label: "Physical Traders"
      },
      {
        label: "Sourcing and Procurement"
      },
      {
        label: "Consulting"
      }
    ]
  },
  {
    label: "Research",
    href: "/research"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Login",
    href: "/login"
  },
  {
    label: "Sign up",
    href: "/signup"
  }
];

export default data;
