export const config={
  "id": "business",
  "repo": "business-page-template",
  "title": "Northline Studio",
  "heading": "Make room for good work.",
  "intro": "A sample independent studio for thoughtful spaces, clear identities and useful digital tools.",
  "noun": "service",
  "plural": "services",
  "titleField": "title",
  "publishing": true,
  "linkLabel": "Discuss a project",
  "fields": [
    {
      "key": "title",
      "label": "Service",
      "type": "text",
      "required": true
    },
    {
      "key": "description",
      "label": "Description",
      "type": "textarea",
      "required": true
    },
    {
      "key": "details",
      "label": "What is included",
      "type": "textarea",
      "required": true
    },
    {
      "key": "link",
      "label": "Contact link",
      "type": "url",
      "required": true
    },
    {
      "key": "state",
      "label": "Publication state",
      "type": "select",
      "required": true,
      "options": [
        "Draft",
        "Published"
      ],
      "default": "Draft"
    }
  ],
  "settings": [
    {
      "key": "name",
      "label": "Business name",
      "default": "Northline Studio",
      "type": "text",
      "required": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "default": "Make room for good work.",
      "type": "text",
      "required": true
    },
    {
      "key": "about",
      "label": "About the business",
      "default": "An independent studio for thoughtful spaces, clear identities and useful digital tools.",
      "type": "textarea",
      "required": true
    },
    {
      "key": "contact",
      "label": "Contact email",
      "default": "hello@example.com",
      "type": "text",
      "required": true
    },
    {
      "key": "hours",
      "label": "Opening hours",
      "default": "Monday–Friday, 09:00–17:00. By appointment.",
      "type": "textarea",
      "required": true
    }
  ]
};
