import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

export const headerConfig = [
  {
    component: Typography,
    props: {
      color: "primary",
      component: "h1"
    },
    children: ["Menu"]
  },
  {
    component: Button,
    props: {
      color: "secondary",
      onClick: () => console.log("Button clicked")
    },
    children: ["link 1"]
  }
];

export const mainConfig = [
  {
    component: Typography,
    props: {
      color: "primary",
      component: "h2"
    },
    children: ["The Title"]
  },
  {
    component: Paper,
    props: {
      className: "the-paper"
    },
    children: [
      {
        component: Typography,
        props: {
          color: "secondary",
          component: "h2"
        },
        children: ["The Paper"]
      },
      {
        component: Typography,
        props: {
          component: "p"
        },
        children: ["paper text"]
      }
    ]
  },
  {
    component: Paper,
    props: {
      className: "the-paper"
    },
    children: [
      {
        component: Typography,
        props: {
          color: "secondary",
          component: "h2"
        },
        children: ["The Paper"]
      },
      {
        component: Typography,
        props: {
          component: "p"
        },
        children: ["paper text"]
      }
    ]
  }
];

export const asideConfig = [
  {
    component: Typography,
    props: {
      color: "primary",
      component: "h4"
    },
    children: ["Aside content"]
  },
  {
    component: Button,
    props: {
      color: "primary",
      onClick: () => console.log("Button clicked")
    },
    children: ["aside btn"]
  }
];

export const footerConfig = [
  {
    component: Button,
    props: {
      color: "secondary",
      onClick: () => console.log("Button clicked")
    },
    children: ["Footer link"]
  },
  {
    component: Button,
    props: {
      color: "primary",
      onClick: () => console.log("Button clicked")
    },
    children: ["Privacy Policy"]
  },
  {
    component: Button,
    props: {
      color: "secondary",
      onClick: () => console.log("Button clicked")
    },
    children: ["Terms"]
  }
];
