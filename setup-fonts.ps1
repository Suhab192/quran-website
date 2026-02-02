# Font Setup Script for Quran Website
# Run this script from the project root directory

# Create the proper Next.js public folder structure
Write-Host "Setting up font directories..." -ForegroundColor Cyan

# Create directories
New-Item -ItemType Directory -Path "public/english" -Force | Out-Null
New-Item -ItemType Directory -Path "public/arabic" -Force | Out-Null

Write-Host "Copying and renaming English fonts..." -ForegroundColor Yellow

# English Fonts - Copy and rename to clean names
$englishMappings = @{
    "Public_Folder/English_Fonts/Cinzel-Regular.otf" = "public/english/Cinzel-Regular.otf"
    "Public_Folder/English_Fonts/Cinzel-Bold.otf" = "public/english/Cinzel-Bold.otf"
    "Public_Folder/English_Fonts/copperplate-gothic-light.ttf" = "public/english/copperplate-gothic-light.ttf"
    "Public_Folder/English_Fonts/Copperplate-Gothic-Std-32-BC.ttf" = "public/english/Copperplate-Gothic-Std-32-BC.ttf"
    "Public_Folder/English_Fonts/JuliusSansOne-Regular.ttf" = "public/english/JuliusSansOne-Regular.ttf"
    "Public_Folder/English_Fonts/LemonMilk.otf" = "public/english/LemonMilk.otf"
    "Public_Folder/English_Fonts/LemonMilkbold.otf" = "public/english/LemonMilkbold.otf"
    "Public_Folder/English_Fonts/OptimusPrinceps.ttf" = "public/english/OptimusPrinceps.ttf"
    "Public_Folder/English_Fonts/OptimusPrincepsSemiBold (1).ttf" = "public/english/OptimusPrincepsSemiBold.ttf"
    "Public_Folder/English_Fonts/Trajan Pro Bold.ttf" = "public/english/Trajan-Pro-Bold.ttf"
}

foreach ($mapping in $englishMappings.GetEnumerator()) {
    if (Test-Path $mapping.Key) {
        Copy-Item -Path $mapping.Key -Destination $mapping.Value -Force
        Write-Host "  Copied: $($mapping.Value)" -ForegroundColor Green
    } else {
        Write-Host "  Not found: $($mapping.Key)" -ForegroundColor Red
    }
}

Write-Host "`nCopying and renaming Arabic fonts..." -ForegroundColor Yellow

# Arabic Fonts - Copy and rename to clean names
$arabicMappings = @{
    "Public_Folder/Arabic_Fonts/A Thuluth Regular (1).ttf" = "public/arabic/A-Thuluth-Regular.ttf"
    "Public_Folder/Arabic_Fonts/AM_Thulth_Regular_0.1 (1).ttf" = "public/arabic/AM-Thulth-Regular.ttf"
    "Public_Folder/Arabic_Fonts/KfgqpcHafsUthmanicScriptRegular-1jGEe (1).ttf" = "public/arabic/KfgqpcHafsUthmanicScript.ttf"
    "Public_Folder/Arabic_Fonts/Elgharib-KFGQPC-Hafs TAWEEL (1).ttf" = "public/arabic/Elgharib-KFGQPC-Hafs-TAWEEL.ttf"
    "Public_Folder/Arabic_Fonts/Lifta-Black (1).otf" = "public/arabic/Lifta-Black.otf"
    "Public_Folder/Arabic_Fonts/Liftaswashfixed-Regular (1).otf" = "public/arabic/Liftaswashfixed-Regular.otf"
    "Public_Folder/Arabic_Fonts/Elgharib Surah Name Diwani (1).ttf" = "public/arabic/Elgharib-Surah-Name-Diwani.ttf"
    "Public_Folder/Arabic_Fonts/Elgharib-AYB-QuraaDiwani (1).ttf" = "public/arabic/Elgharib-AYB-QuraaDiwani.ttf"
    "Public_Folder/Arabic_Fonts/Elgharib-Khalid-Quraa Names (1).ttf" = "public/arabic/Elgharib-Khalid-Quraa-Names.ttf"
    "Public_Folder/Arabic_Fonts/Elgharib-Quraa-Alharamayn (1).ttf" = "public/arabic/Elgharib-Quraa-Alharamayn.ttf"
    "Public_Folder/Arabic_Fonts/Surah Name Ejazah @Am9li9 (1).ttf" = "public/arabic/Surah-Name-Ejazah.ttf"
}

foreach ($mapping in $arabicMappings.GetEnumerator()) {
    if (Test-Path $mapping.Key) {
        Copy-Item -Path $mapping.Key -Destination $mapping.Value -Force
        Write-Host "  Copied: $($mapping.Value)" -ForegroundColor Green
    } else {
        Write-Host "  Not found: $($mapping.Key)" -ForegroundColor Red
    }
}

Write-Host "`nFont setup complete!" -ForegroundColor Cyan
Write-Host "Run 'npm run dev' to start the development server." -ForegroundColor White
Write-Host "Then visit http://localhost:3000/test-fonts to see the font gallery." -ForegroundColor White
