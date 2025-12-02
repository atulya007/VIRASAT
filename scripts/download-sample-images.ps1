# Download curated sample images into public/images/varanasi and public/images/jaipur
# Usage: Open PowerShell in project root and run: .\scripts\download-sample-images.ps1

$base = Join-Path $PSScriptRoot ".."
$public = Resolve-Path -Path (Join-Path $base "public")

$varanasiDir = Join-Path $public "images\varanasi"
$jaipurDir = Join-Path $public "images\jaipur"

New-Item -ItemType Directory -Force -Path $varanasiDir | Out-Null
New-Item -ItemType Directory -Force -Path $jaipurDir | Out-Null

$varanasiUrls = @(
    'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1582889923788-2d2ae88c2db1?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=1600&h=900&fit=crop'
)

$jaipurUrls = @(
    'https://images.unsplash.com/photo-1609137144813-4db5b30a34e4?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1516383740770-fbce5e07e440?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1507998239627-6bae820c0aea?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1552520514-5fefe8c9ef14?w=1600&h=900&fit=crop'
)

Write-Host "Downloading Varanasi images to $varanasiDir"
for ($i=0; $i -lt $varanasiUrls.Count; $i++) {
    $url = $varanasiUrls[$i]
    $out = Join-Path $varanasiDir ("photo{0}.jpg" -f ($i+1))
    Write-Host " - $url -> $out"
    if (Get-Command curl.exe -ErrorAction SilentlyContinue) {
        & curl.exe -L -o "$out" "$url"
    } else {
        Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -ErrorAction SilentlyContinue
    }
}

Write-Host "Downloading Jaipur images to $jaipurDir"
for ($i=0; $i -lt $jaipurUrls.Count; $i++) {
    $url = $jaipurUrls[$i]
    $out = Join-Path $jaipurDir ("photo{0}.jpg" -f ($i+1))
    Write-Host " - $url -> $out"
    if (Get-Command curl.exe -ErrorAction SilentlyContinue) {
        & curl.exe -L -o "$out" "$url"
    } else {
        Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -ErrorAction SilentlyContinue
    }
}

Write-Host "Done. You can now run the dev server and local images will be used when available."
