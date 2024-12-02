import type { CollectionConfig } from "payload";

export const Portfolios: CollectionConfig = {
  slug: "portfolios",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "socialMedia",
      type: "array",
      required: true,
      fields: [
        {
          name: "platform",
          type: "radio",
          required: true,
          options: [
            {
              label: "Twitter",
              value: "twitter",
            },
            {
              label: "Linkedin",
              value: "linkedin",
            },
            {
              label: "Github",
              value: "github",
            },
            {
              label: "Email",
              value: "email",
            },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "experience",
      type: "array",
      fields: [
        {
          name: "position",
          type: "text",
          required: true,
        },
        {
          name: "startDate",
          type: "date",
          required: true,
        },
        {
          name: "endDate",
          type: "date",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
    {
      name: "education",
      type: "array",
      fields: [
        {
          name: "institution",
          type: "text",
          required: true,
        },
        {
          name: "course",
          type: "text",
          required: true,
        },
        {
          name: "startDate",
          type: "date",
          required: true,
        },
        {
          name: "endDate",
          type: "date",
          required: true,
        },
        {
          name: "cgpa",
          type: "number",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
    {
      name: "achievement",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "date",
          type: "date",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
    {
      name: "project",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "techStack",
          type: "array",
          required: true,
          fields: [
            {
              name: "name",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
  upload: true,
};
