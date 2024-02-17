import img1 from '../assets/images/blogs/Brazil.jpg'
import detail1 from '../assets/images/blogs/Brazil-details.jpg'
import img2 from '../assets/images/blogs/Argentina.jpg'
import detail2 from '../assets/images/blogs/Argentina-details.jpg'
import img3 from '../assets/images/blogs/canada.jpg'
import detail3 from '../assets/images/blogs/canada-details.jpg'
import img4 from '../assets/images/blogs/Chile.jpg'
import detail4 from '../assets/images/blogs/Chile-details.jpg'
import img5 from '../assets/images/blogs/Spain.jpg'
import detail5 from '../assets/images/blogs/Spain-details.jpg'
import img6 from '../assets/images/blogs/london.jpg'
import detail6 from '../assets/images/blogs/london-details.jpg'
import img7 from '../assets/images/blogs/Iceland2.jpg'
import detail7 from '../assets/images/blogs/Iceland-details.jpg'
import img8 from '../assets/images/blogs/Dubai.jpg'
import detail8 from '../assets/images/blogs/Dubai-details.jpg'
import img9 from '../assets/images/blogs/egypt.jpg'
import detail9 from '../assets/images/blogs/egypt-details.jpg'
import img10 from '../assets/images/blogs/Portugal.jpg'
import detail10 from '../assets/images/blogs/portugal-details.jpg'
import img11 from '../assets/images/blogs/greece.jpg'
import detail11 from '../assets/images/blogs/greece-details.jpg'
import img12 from '../assets/images/blogs/peru.jpg'
import detail12 from '../assets/images/blogs/peru-details.jpg'
import img13 from '../assets/images/blogs/Italy.jpg'
import detail13 from '../assets/images/blogs/Italy-details.jpg'
export const blogData = [
    {
        id : "Brazil",
        img : img1,
        title : "Brazil: A Journey through Culture, Nature, and Adventure",
        date : '1',
        month : 'Jan',
        fullDate : "1 January 2024",
        isRecent : true,
        details : {
            img : detail1,
            recentblogs : [
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : 'Canada'
                },
                {
                    img : detail4,
                    title : "Chile : Land of Fire & Ice – Exploring Nature's Marvels",
                    link : "Chile"
                },
                
            ]

        }
    },
    {
        id : "Argentina",
        img : img2,
        title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
        date : '19',
        month : 'Oct',
        fullDate : "19 October 2023",
        isRecent : true,
        details : {
            img : detail2,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : 'Canada'
                },
                {
                    img : detail4,
                    title : "Chile : Land of Fire & Ice – Exploring Nature's Marvels",
                    link : "Chile"
                },
                
            ]

        }
    },
    {
        id : "Canada",
        img : img3,
        title : "Canada : Exploring Canada's Natural Beauty",
        date : '1',
        month : 'Sep',
        fullDate : "1 September 2023",
        isRecent : true,
        details : {
            img : detail3,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail4,
                    title : "Chile : Land of Fire & Ice – Exploring Nature's Marvels",
                    link : "Chile"
                },
                
            ]

        }
    },
    {
        id : "Chile",
        img : img4,
        title : "Chile : Land of Fire & Ice – Exploring Nature's Marvels",
        date : '27',
        month : 'Apr',
        fullDate : "27 April 2023",
        isRecent : true,
        details : {
            img : detail4,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]

        }
    },
    {
        id : "Spain",
        img : img5,
        title : "Spain : A Journey Through History, Culture, and Cuisine",
        date : '23',
        month : 'Mar',
        fullDate : "23 March 2023",
        isRecent : true,
        details : {
            img : detail5,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]

        }
    },
    {
        id : "London",
        img : img6,
        title : "London : A Journey Through the Heart of the UK's Capital",
        date : '23',
        month : 'Mar',
        fullDate : "23 March 2023",
        isRecent : true,
        details : {
            img : detail6,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]

        }
    },
    {
        id : 'Iceland',
        img : img7,
        title : 'Most Popular Places To Visit In Iceland',
        date : '29',
        month : 'Jan',
        fullDate : "29 January 2023",
        details : {
            img : detail7,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]
        }
    },
    {
        id : 'Dubai',
        img : img8,
        title : 'Dazzling Dubai : Unveiling the Jewel of the Desert',
        date : '4',
        month : 'Jan',
        fullDate : "4 January 2023",
        details : {
            img : detail8,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]
        }
    },
    {
        id : 'Egypt',
        img : img9,
        title : "Unraveling Egypt's Mysteries from the Pyramids to the Pharaohs",
        date : '08',
        month : 'Oct',
        fullDate : "08 October 2022",
        details : {
            img : detail9,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]
        }
    },
    {
        id : 'Portugal',
        img : img10,
        title : "Exploring Portugal : From Historic Streets to Coastal Retreats",
        date : '3',
        fullDate : "3 November 2022",
        month : 'Nov',
        details : {
            img : detail10,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]
        }
    },
    {
        id : "Greece",
        img : img11,
        title : 'Greece : Greeking out over the view of Mykonos',
        date : '24',
        fullDate : "September 24, 2022",
        month : 'Sep',
        details : {
            img : detail11,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]
        }
    },
    {
        id : "Peru",
        img : img12,
        title : 'Peru : Unraveling Ancient Mysteries and Natural Wonders',
        date : '25',
        fullDate : "March 25, 2022",
        month : 'Mar',
        details : {
            img : detail12,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]
        }
    },
    
    {
        id : 'Italy',
        img : img13,
        title : "Italy : A Journey Through Italy's Timeless Beauty and Flavors",
        date : '7',
        fullDate : "7 October 2021",
        month : 'Oct',
        details : {
            img : detail13,
            recentblogs : [
                {
                    img : detail1,
                    title : "Brazil: A Journey through Culture, Nature, and Adventure",
                    link : 'Brazil'
                },
                {
                    img : detail2,
                    title : "Discovering Argentina's Rich Culture and Stunning Landscapes",
                    link : 'Argentina'
                },
                {
                    img : detail3,
                    title : "Canada : Exploring Canada's Natural Beauty",
                    link : "Canada"
                },
                
            ]
        }
    },
   
]