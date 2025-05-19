"use client";

import { useParams } from "next/navigation";
import ProductContent from "./pages/ProductContent";
import InventoryContent from "./pages/InventoryContent";
import StockEntryContent from "@/app/dashboard/component/pages/StockEntryContent";
import ProfileContent from "@/app/dashboard/component/pages/ProfileContent";
import HomeContent from "@/app/dashboard/component/pages/HomeContent";

export default function ClientContent() {
    const { menu } = useParams();

    const renderContent = () => {
        switch (menu) {
            case "inventory":
                return <InventoryContent />;
            case "stock-entry":
                return <StockEntryContent />;
            case "profile":
                return <ProfileContent />;
            case "product":
                return <ProductContent/>;
            default:
                return <HomeContent />;
        }
    };

    return <>{renderContent()}</>;
}
