local troolls  = get("lmao")
local empty = get("troll")
local myurl = get("get-link")


local function parse_github_url(url)
    local username, repo = string.match(url, "https://github%.com/([^/]+)/([^/]+)")

    if not username or not repo then
        error("Invalid GitHub URL format")
    end

    return username, repo
end

local function fetch_from_github(username, repo, file)
    local github_url_template = "https://raw.githubusercontent.com/%s/%s/main/%s"
    local url = string.format(github_url_template, username, repo, file)

    local response = fetch({
        url = url,
        method = "GET",
        headers = { ["Content-Type"] = "application/json" },
    })

    return response
end

troolls.on_click(function()
    local stripped_url = string.gsub(myurl.get_content(), "^buss://", "")
    local domain, tld = string.match(stripped_url, "([^%.]+)%.([^/]+)")
    local api_url_template = "https://api.buss.lol/domain/%s/%s"
    local github_url_template = "https://raw.githubusercontent.com/%s/%s/main/%s"
    local res = fetch({
        url = string.format(api_url_template, domain, tld),
        method = "GET",
        headers = { ["Content-Type"] = "application/json" },
        body = body,
    })
    local ip = res['ip']
    local username, repo = parse_github_url(ip)

    local files = {"index.html", "script.lua", "style.css"}
    local all_content = ""

    for _, file in ipairs(files) do
        local response = fetch_from_github(username, repo, file)
        if response.status == 200 then
            all_content = all_content .. "\n--- " .. file .. " ---\n" .. response['content'] .. "\n"
        else
            all_content = all_content .. "\n--- " .. file .. " ---\n" .. "Not found\n"
        end
    end

    empty.set_content(all_content)
end)
