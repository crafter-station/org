<h3 align="center">
  <a href="https://org.crafter.run" target="_blank">
    <img src="https://github.com/crafter-station/org/blob/main/public/logo.svg" width="80" alt="Crafter Station Logo"/>
  </a>
  <br/>
  <span style="font-weight:600;font-size:20px;">Crafter Station Org</span>
  <br/>
  <br/>
  <a href="https://github.com/crafter-station/org/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/crafter-station/org?style=social" alt="GitHub stars"/>
  </a>
  &nbsp;
  <a href="https://github.com/crafter-station/flow" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-@crafter/flow-FFD800" alt="Built with @crafter/flow"/>
  </a>
</h3>

<p align="center">
  Interactive org chart for Crafter Station. Who owns what, on one canvas.
</p>

<p align="center">
  <a href="https://org.crafter.run"><strong>org.crafter.run</strong></a>
</p>

## About

The chart is organized by **area of ownership**, not by technical discipline. Each area has one
owner who leads it and answers for it. People hang from the area they own.

Areas: Community, Product, Events & Workshops, Content, Partnerships & Humans, Distribution,
Finance, Brand, Chapters.

Click any person to see their ownership, bio, and links. Drag to pan, scroll to zoom.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [@crafter/flow](https://github.com/crafter-station/flow) for the hierarchy layout and canvas
- Tailwind CSS

## Development

```bash
bun install
bun dev
```

## Updating the team

Everything lives in [`src/data/team.ts`](src/data/team.ts). Nodes are typed as `TeamMember`:

```ts
{
  id: "area-content",
  name: "Content",
  role: "Video · Redes · Formatos de marca",
  level: "area",
  children: [
    {
      id: "someone",
      name: "Someone",
      role: "Content Creator",
      country: "PE",
      level: "member",
      areas: ["Content"],
      github: "username",
      avatar: "https://github.com/username.png",
      bio: "What they own",
    },
  ],
}
```

| Field | What it does |
|---|---|
| `level` | `org`, `founder`, `area` or `member`. Drives how the node renders |
| `areas` | Ownership chips in the profile popover |
| `country` | `PE`, `CO` or `CN`. Renders a flag |
| `vacant` | Dashed node for an area with no owner |
| `github` | Also the avatar source via `github.com/<user>.png` |

## Scripts

```bash
bun dev      # dev server
bun build    # typecheck + production build
bun lint     # eslint
bun preview  # preview the build
```
