import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import suggestions from './languagesArray'
// const suggestions = [
//     { label: 'Afghanistan' },
//     { label: 'Aland Islands' },
//     { label: 'Albania' },
//     { label: 'Algeria' },
//     { label: 'American Samoa' },
//     { label: 'Andorra' },
//     { label: 'Angola' },
//     { label: 'Anguilla' },
//     { label: 'Antarctica' },
//     { label: 'Antigua and Barbuda' },
//     { label: 'Argentina' },
//     { label: 'Armenia' },
//     { label: 'Aruba' },
//     { label: 'Australia' },
//     { label: 'Austria' },
//     { label: 'Azerbaijan' },
//     { label: 'Bahamas' },
//     { label: 'Bahrain' },
//     { label: 'Bangladesh' },
//     { label: 'Barbados' },
//     { label: 'Belarus' },
//     { label: 'Belgium' },
//     { label: 'Belize' },
//     { label: 'Benin' },
//     { label: 'Bermuda' },
//     { label: 'Bhutan' },
//     { label: 'Bolivia, Plurinational State of' },
//     { label: 'Bonaire, Sint Eustatius and Saba' },
//     { label: 'Bosnia and Herzegovina' },
//     { label: 'Botswana' },
//     { label: 'Bouvet Island' },
//     { label: 'Brazil' },
//     { label: 'British Indian Ocean Territory' },
//     { label: 'Brunei Darussalam' },
//   ];
  
  
function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;
  
    return (
      <TextField
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput,
          },
          ...InputProps,
        }}
        {...other}
      />
    );
  }
  
  renderInput.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    InputProps: PropTypes.object,
  };
  
  function renderSuggestion(suggestionProps) {
    const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.englishName) > -1;
  
    return (
      <MenuItem
        {...itemProps}
        key={suggestion.englishName}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {suggestion.englishName}
      </MenuItem>
    );
  }
  
  renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
    index: PropTypes.number.isRequired,
    itemProps: PropTypes.object.isRequired,
    selectedItem: PropTypes.string.isRequired,
    suggestion: PropTypes.shape({
      label: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  function getSuggestions(value, { showEmpty = false } = {}) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength === 0 && !showEmpty
      ? []
      : suggestions.filter(suggestion => {
          const keep =
            count < 5 && suggestion.englishName.slice(0, inputLength).toLowerCase() === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
        });
  }
  
export default function SelectLanguage(props) {
    const { classes } = props;
    const [inputValue, setInputValue] = React.useState('');
    const [selectedItem, setSelectedItem] = React.useState([]);
  
    const handleKeyDown = event => {
      if (selectedItem.length && !inputValue.length && event.key === 'Backspace') {
        setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
      }
    };
  
    const handleInputChange = event => {
      setInputValue(event.target.value);
    };
  
    const handleChange = item => {
      let newSelectedItem = [...selectedItem];
      if (newSelectedItem.indexOf(item) === -1) {
        newSelectedItem = [...newSelectedItem, item];
      }
      setInputValue('');
      setSelectedItem(newSelectedItem);
    };
    props.setLanguages(selectedItem);
    const handleDelete = item => () => {
      const newSelectedItem = [...selectedItem];
      newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
      setSelectedItem(newSelectedItem);
    };
    
    return (
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex,
        }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder: 'Add Language',
          });
  
          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label: 'Languages',
                InputLabelProps: getLabelProps(),
                InputProps: {
                  startAdornment: selectedItem.map(item => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      className={classes.chip}
                      onDelete={handleDelete(item)}
                    />
                  )),
                  onBlur,
                  onChange: event => {
                    handleInputChange(event);
                    onChange(event);
                  },
                  onFocus,
                },
                inputProps,
              })}
  
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue2).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.englishName }),
                      highlightedIndex,
                      selectedItem: selectedItem2,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          );
        }}
      </Downshift>
    );
  }
  
  SelectLanguage.propTypes = {
    classes: PropTypes.object.isRequired,
  };