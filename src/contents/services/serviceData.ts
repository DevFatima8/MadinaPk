
import ServicesOne11 from '../../assets/images/services/services-one-1-1.jpg';
import ServicesOne12 from '../../assets/images/services/services-one-1-2.jpg';
import ServicesOne13 from '../../assets/images/services/services-one-1-3.jpg';
import ServicesOne14 from '../../assets/images/services/services-one-1-4.jpg';
import ServicesOne15 from '../../assets/images/services/services-one-1-5.jpg';
import ServicesOne16 from '../../assets/images/services/services-one-1-6.jpg';

export interface ServiceItem {
    id: number;
    count: string;
    title: string;
    link: string;
    image: string;
    iconClass: string;
    text: string;
}
export const servicesData: ServiceItem[] = [
    {
        id: 1,
        title: "International Shipping",
        link: "/international-transport",
        image: ServicesOne11,
        iconClass: "icon-worldwide-shipping",
        count: "01",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
    {
        id: 2,
        title: "Ocean Freight",
        link: "/ocean-transport",
        image: ServicesOne12,
        iconClass: "icon-shipment",
        count: "02",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
    {
        id: 3,
        title: "Rail Freight",
        link: "/emergency-transport",
        image: ServicesOne13,
        iconClass: "icon-delivery-man",
        count: "03",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
    {
        id: 4,
        title: "Road Freight",
        link: "/track-transport",
        image: ServicesOne14,
        iconClass: "icon-truck",
        count: "04",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
    {
        id: 5,
        title: "Local Truck Transport",
        link: "/track-transport",
        image: ServicesOne15,
        iconClass: "icon-shipment",
        count: "05",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
    {
        id: 6,
        title: "Fast Personal Delivery",
        link: "/personal-delivery",
        image: ServicesOne16,
        iconClass: "icon-delivery-man",
        count: "06",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
    {
        id: 7,
        title: "Ocean Freight",
        link: "/ocean-transport",
        image: ServicesOne12,
        iconClass: "icon-shipment",
        count: "07",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
    {
        id: 8,
        title: "Rail Freight",
        link: "/emergency-transport",
        image: ServicesOne13,
        iconClass: "icon-delivery-man",
        count: "08",
        text: "A logistic service provider company plays a pivotal role in the global logistic service."
    },
];