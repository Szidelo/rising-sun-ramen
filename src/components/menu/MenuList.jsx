import './menu.css'
import MenuCard from './MenuCard'
import FOOD_DATA from '../../data/food.json'

const MenuList = () => {
    return (
        <div className='menu'>
            <div className='menu__container px-2'>
                <h1 className='text-center'>Meniu</h1>
                <div className='menu__container-section'>
                    <h1 className='menu__container-section-header'>Ramen</h1>
                    <div className='menu-list row'>
                        {FOOD_DATA.ramen.map((data) => {
                            return (
                                <div key={data.id} className='menu-list-item col-12 col-md-4'>
                                    <MenuCard menuItem={data}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='menu__container-section'>
                    <h1 className='menu__container-section-header'>Sushi</h1>
                    <div className='menu-list row'>
                        {FOOD_DATA.sushi.map((data) => {
                            return (
                                <div key={data.id} className='menu-list-item col-12 col-md-4'>
                                    <MenuCard menuItem={data}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='menu__container-section'>
                    <h1 className='menu__container-section-header'>Other</h1>
                    <div className='menu-list row'>
                        {FOOD_DATA.other.map((data) => {
                            return (
                                <div key={data.id} className='menu-list-item col-12 col-md-4'>
                                    <MenuCard menuItem={data}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuList