
export interface NavigationItem {
    id: string
    label: string
    icon: any
}

export interface NavbarProps {
    portfolioData: {
        personal: {
            name: string
            email: string
        }
    }
}