import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Field, Button } from './component';
import { listAdd, listCreate } from './actions';

class AddForm extends Component {
    onButtonPress() {
        const { label } = this.props;

        this.props.listCreate();
    }
    
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Field 
                label="Label"
                placeholder="..."
                autoCorrect={true}
                onChangeText={value => this.props.listAdd({ prop: 'label', value })}
                value={this.props.label}
                />
                {/* tombol buat nambahin list */}
                <Button
                onPress={this.onButtonPress.bind(this)}
                >
                    Add
                </Button>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const mapStateToProps = (state) => {
    const { label } = state.addForm;

    return { label };  
}

export default connect(mapStateToProps, { listAdd, listCreate })(AddForm);
