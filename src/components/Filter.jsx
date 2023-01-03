import React from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.css";

export const Filter = ({ filter, onChange }) => (
  <label className={css.filterLabel}>
    Find contacts by name
    <input
      className={css.filterInput}
      type="text"
      value={filter}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};