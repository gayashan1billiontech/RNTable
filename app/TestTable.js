import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, Modal } from "react-native";
import Collapsible from "react-native-collapsible";
import { SimpleModal } from "./component/SimpleModal";




const Table = () => {

    const [toggleRowIndex, setSelectedRowIndex] = useState("-1")

    const tableData = [
        { head1: '1', head2: '2', head3: '3', head4: '4', head5: '5' },
        { head1: '1', head2: '2', head3: '3', head4: '4', head5: '5' },
        { head1: '1', head2: '2', head3: '3', head4: '4', head5: '5' },
        { head1: '1', head2: '2', head3: '3', head4: '4', head5: '5' },
        { head1: '1', head2: '2', head3: '3', head4: '4', head5: '5' }
    ]

    const handleOnRowPress = (val) => {
        console.log(val)

        if (val == toggleRowIndex) {
            setSelectedRowIndex('-1')
        }
        else {
            setSelectedRowIndex(val)
        }

    }

    return (
        <View style={styles.table}>


            <View style={styles.row}>
                <View style={styles.cell}>
                    <Text>Head</Text>
                </View>
                <View style={styles.cell}>
                    <Text>Head2</Text>
                </View>
                <View style={styles.cell}>
                    <Text>Head3</Text>
                </View>
                <View style={styles.cell}>
                    <Text>Head4</Text>
                </View>
                <View style={styles.cell}>
                    <Text>Head5</Text>
                </View>
            </View>

            {tableData.map((tableData, index) => (
                <View>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => handleOnRowPress(index)}>
                        <View style={styles.row}>
                            <View style={styles.cellData}>
                                <Text>{tableData.head1}</Text>
                            </View>
                            <View style={styles.cellData}>
                                <Text>{tableData.head2}</Text>
                            </View>
                            <View style={styles.cellData}>
                                <Text>{tableData.head3}</Text>
                            </View>
                            <View style={styles.cellData}>
                                <Text>{tableData.head4}</Text>
                            </View>
                            <View style={styles.cellData}>
                                <Text>{tableData.head5}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Collapsible collapsed={!(toggleRowIndex == index)}>


                        <View style={styles.rowBottomContainer}>
                            <Text>Hello World !</Text>
                            {/* <Modal>
                            </Modal> */}
                        </View>


                    </Collapsible>

                </View>
            ))}






        </View>
    );
}



export default Table;

const styles = StyleSheet.create({
    rowBottomContainer: {
        height: 100,
        backgroundColor: 'green',
        borderColor: '#93D8FF',
        backgroundColor: '#F4FBFF',
        borderWidth: 5,
    },

    table: {
        margin: 10,
    },

    cellData: {
        borderColor: '#93D8FF',
        backgroundColor: '#F4FBFF',
        borderWidth: 1,
        flex: 1,
        padding: 10,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    cell: {
        borderColor: '#3FB4F7',
        backgroundColor: '#E5F6FF',
        borderWidth: 0.5,
        flex: 1,
        padding: 10,
    },

    cellFlex2: {
        flex: 2
    }
})