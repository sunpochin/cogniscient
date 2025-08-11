import { useCallback } from 'react'
import { Box } from '@mui/material'
import type { FC } from 'react'

export type NavBarType = {
  className?: string
}

/**
 * 全局導覽列元件。
 * 使用 Flexbox 實現，確保在不同螢幕寬度下都能正確響應。
 */
const NavBar: FC<NavBarType> = ({ className = '' }) => {
  const onMembersTextClick = useCallback(() => {
    // TODO: Implement navigation to Members page
  }, [])

  const onArticlesTextClick = useCallback(() => {
    // TODO: Implement navigation to Articles page
  }, [])

  return (
    <Box
      component="header"
      className={`w-full flex justify-end items-center px-8 py-4 bg-white ${className}`}
    >
      <nav className="flex items-center space-x-8 text-lg">
        <div className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">
          About Us
        </div>
        <div className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">
          Services
        </div>
        <div
          className="font-semibold cursor-pointer hover:text-blue-600 transition-colors"
          onClick={onMembersTextClick}
        >
          Members
        </div>
        <div
          className="font-semibold cursor-pointer hover:text-blue-600 transition-colors"
          onClick={onArticlesTextClick}
        >
          Articles
        </div>
        <div className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">
          Contact Us
        </div>
      </nav>
    </Box>
  )
}

export default NavBar
