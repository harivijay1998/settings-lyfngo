import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = ({isOpen}) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      title: "General",
      links: [
        { label: "Practice Details", href: "https://example.com/section1" },
        { label: "Staff Management", href: "https://example.com/section2" },
        { label: "Calendar", href: "https://example.com/section3" },
      ],
    },
    {
      title: "Pricing",
      links: [
        { label: "Pricing", href: "https://example.com/section1" },
        { label: "Billing", href: "https://example.com/section2" },
        { label: "Discount Management", href: "https://example.com/section3" },
        { label: "Commission Management", href: "https://example.com/section4" },
        { label: "Lab Orders", href: "https://example.com/section5" },
      ],
    },
    {
      title: "Catalog",
      links: [
        { label: "Drug Catalog", href: "https://example.com/section1" },
        { label: "Clinical Notes Catalog", href: "https://example.com/section2" },
        { label: "Drug Instruction", href: "https://example.com/section3" },
        { label: "Diet/Lifestyle", href: "https://example.com/section4" },
      ],
    },
    {
      title: "Channels",
      links: [
        { label: "Notifications", href: "https://example.com/section1" },
        { label: "Communications", href: "https://example.com/section2" },
        { label: "Template", href: "https://example.com/section3" },
      ],
    },
    {
      title: "Controls",
      links: [
        { label: "Auto ID Generation", href: "https://example.com/section1" },
        { label: "Patient Group", href: "https://example.com/section2" },
        { label: "Consent Form", href: "https://example.com/section3" },
        { label: "Charting Template", href: "https://example.com/section4" },
        { label: "WhatsApp Template", href: "https://example.com/section5" },
      ],
    },
    {
      title: "Personalisation",
      links: [
        { label: "Membership", href: "https://example.com/section1" },
        { label: "Diet Plan", href: "https://example.com/section2" },
        { label: "Workout Plan", href: "https://example.com/section3" },
        { label: "Field Customization", href: "https://example.com/section4" },
      ],
    },
    {
      title: "Hub",
      links: [
        { label: "Integration", href: "https://example.com/section1" },
        { label: "Import/Export", href: "https://example.com/section2" },
        { label: "Public Holidays", href: "https://example.com/section3" },
      ],
    },
  ];

  return (
    <Box sx={{ padding: "0px" , width:'13%', position:'fixed', backgroundColor:'#f5f5f5' }}>
      {isOpen && (
        <>
          <Typography variant="h5" color="black" paddingInlineStart={"20px"} paddingBlock={"10px"}>
            Settings
          </Typography>
          <Divider sx={{ marginBlock: "10px" }} />
          {accordionData.map((accordion, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleAccordionChange(`panel${index + 1}`)}
              sx={{ boxShadow: "none", border: "none", paddingBlock: "10px", backgroundColor: "#f5f5f5" }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`}>
                <Typography sx={{ fontSize: "15px" }}>{accordion.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {accordion.links.map((link, linkIndex) => (
                  <Typography key={linkIndex} sx={{ marginBlockEnd: "10px" }}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black", fontSize: "15px" }}>
                      {link.label}
                    </a>
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </>
      )}
    </Box>
  );
};

export default Sidebar;
