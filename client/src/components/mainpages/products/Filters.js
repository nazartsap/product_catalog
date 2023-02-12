import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Женская одежда </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Все продукты</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Поиск по сайту!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Сортировка </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Самый новый</option>
                    <option value='sort=oldest'>Самый старый</option>
                    <option value='sort=-sold'>Лучший</option>
                    <option value='sort=-price'>Сначала дорогие</option>
                    <option value='sort=price'>Сначала недорогие</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
