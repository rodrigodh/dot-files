local dracula = require("dracula")

dracula.setup({
  -- customize dracula color palette
  colors = {
    bg = "#232136",
    fg = "#e0def4",
    selection = "#56526e",
    comment = "#988BC7",
    red = "#eb6f92",
    orange = "#eb6f92",
    yellow = "#f6c177",
    green = "#9ccfd8",
    purple = "#c4a7e7",
    cyan = "#3e8fb0",
    pink = "#ea9a97",
    bright_red = "#FF6E6E",
    bright_green = "#69FF94",
    bright_yellow = "#FFFFA5",
    bright_blue = "#D6ACFF",
    bright_magenta = "#FF92DF",
    bright_cyan = "#A4FFFF",
    bright_white = "#FFFFFF",
    menu = "#393552",
    visual = "#3E4452",
    gutter_fg = "#4B5263",
    nontext = "#3B4048",
  },
  transparent_bg = true, -- default false
  italic_comment = true, -- default false
})

vim.cmd [[colorscheme dracula]]
