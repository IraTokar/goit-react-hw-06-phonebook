import React from "react";
import { FilterLabel, FilterInput } from './Filter.styled'
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { getFilter } from "components/selectors";
import { changeFilter } from "components/filterSlice";

const filterInputId = nanoid();

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = evt => {
        const normalizedValue = evt.target.value.toLowerCase();

        dispatch(changeFilter(normalizedValue));
    }

    return (
        <div>
            <FilterLabel>
                Find contacts by name
                <FilterInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    id = {filterInputId}
                />
            </FilterLabel>
             
        </div>
    )
};

export default Filter;