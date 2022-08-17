import { Box } from "@mui/system"

export const JournalLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex'
      }}>

      {/* Navbar */}

      {/* Sidebar */}

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3
        }}>

        {/* Toolbar */}

        {children}

      </Box>
    </Box>
  )
}
