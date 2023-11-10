import React from "react"
import "./TopBanner.scss"

import { FiArrowRight } from "react-icons/fi"
const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="top-banner__content">
                <div className="content__text">
                    <p>Get the Mother&apos;s day coupon</p>
                </div>
                <div className="content__icon">
                    <FiArrowRight style={{ color: "#fafafa" }} />
                </div>
            </div>
        </div>
    )
}

export default TopBanner
