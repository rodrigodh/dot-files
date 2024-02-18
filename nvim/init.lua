require('rodrigodh.base')
require('rodrigodh.highlights')
require('rodrigodh.maps')
require('rodrigodh.plugins')

local has = vim.fn.has
local is_mac = has "macunix"
local is_win = has "win32"

if is_mac then
  require('rodrigodh.macos')
end
if is_win then
  require('rodrigodh.windows')
end
