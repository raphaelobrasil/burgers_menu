import { theme } from '@/theme/theme'

const Arrow = () => {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M2.4142 9C2.02367 9.39053 1.39051 9.39053 0.999985 9C0.609461 8.60948 0.609461 7.97631 0.999987 7.58579L8.29288 0.292892C8.6834 -0.0976315 9.31657 -0.0976305 9.70709 0.292893L17 7.58579C17.3905 7.97631 17.3905 8.60948 17 9C16.6095 9.39053 15.9763 9.39053 15.5858 9L9.70709 3.12132C9.31657 2.7308 8.6834 2.7308 8.29288 3.12132L2.4142 9Z" 
        fill={theme.color.tertiary}
      />
    </svg>
  )
}

export default Arrow