!macro customHeader
!macroend
!macro customInstall
  CreateShortCut "$DESKTOP\DN Player.lnk" "$INSTDIR\DN Player.exe"
  CreateShortCut "$SMPROGRAMS\DN Player.lnk" "$INSTDIR\DN Player.exe"
!macroend
!macro customUnInstall
  Delete "$DESKTOP\DN Player.lnk"
  Delete "$SMPROGRAMS\DN Player.lnk"
!macroend
