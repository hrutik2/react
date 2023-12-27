import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { TableContainer, Table, TableCaption, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { BUTTON } from '../component/button'
import { CardDetails ,PAYMENT,DIV} from '../css/card'

const Card=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const conversionFactors = [
    { from: 'inches', to: 'millimetres (mm)', multiplyBy: 25.4 },
    { from: 'feet', to: 'centimetres (cm)', multiplyBy: 30.48 },
    { from: 'yards', to: 'metres (m)', multiplyBy: 0.91444 },
    { from: 'inches', to: 'millimetres (mm)', multiplyBy: 25.4 },
    { from: 'feet', to: 'centimetres (cm)', multiplyBy: 30.48 },
    { from: 'yards', to: 'metres (m)', multiplyBy: 0.91444 },
    { from: 'inches', to: 'millimetres (mm)', multiplyBy: 25.4 },
    { from: 'feet', to: 'centimetres (cm)', multiplyBy: 30.48 },
    { from: 'yards', to: 'metres (m)', multiplyBy: 0.91444 },
    { from: 'inches', to: 'millimetres (mm)', multiplyBy: 25.4 },
    { from: 'feet', to: 'centimetres (cm)', multiplyBy: 30.48 },
    { from: 'yards', to: 'metres (m)', multiplyBy: 0.91444 },
    { from: 'inches', to: 'millimetres (mm)', multiplyBy: 25.4 },
    { from: 'feet', to: 'centimetres (cm)', multiplyBy: 30.48 },
    { from: 'yards', to: 'metres (m)', multiplyBy: 0.91444 },
    { from: 'inches', to: 'millimetres (mm)', multiplyBy: 25.4 },
    { from: 'feet', to: 'centimetres (cm)', multiplyBy: 30.48 },
    { from: 'yards', to: 'metres (m)', multiplyBy: 0.91444 },
    { from: 'inches', to: 'millimetres (mm)', multiplyBy: 25.4 },
    { from: 'feet', to: 'centimetres (cm)', multiplyBy: 30.48 },
    { from: 'yards', to: 'metres (m)', multiplyBy: 0.91444 },
    

    // Add more conversion factors as needed
  ];

  const itemsPerPage = 5; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(conversionFactors.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const displayedItems = conversionFactors.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    return(
       <DIV>
        <div>
            <CardDetails>
                <h1>Account detailes</h1>
                 <p>Name: </p>
                 <p>Account balance :</p>
            </CardDetails>
            <PAYMENT>
              <div>
               <Button onClick={onOpen}>Add Amount</Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                  <ModalHeader>Add Balance In Your Account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                  <FormControl>
                  <FormLabel>Account Number</FormLabel>
                  <Input   placeholder='Account Number' />
                  </FormControl>
                  <FormControl mt={4}>
                  <FormLabel>Amount</FormLabel>
                  <Input placeholder='amount' />
                   </FormControl>
                  </ModalBody>
                  <ModalFooter>
                 <Button colorScheme='blue' mr={3}> Add </Button>
                </ModalFooter>
                </ModalContent>
             </Modal>
             </div>
            <div>
             <BUTTON/>
            </div>
   
        </PAYMENT>
       
       </div>
       <div>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayedItems.map((item, index) => (
              <Tr key={index}>
                <Td>{item.from}</Td>
                <Td>{item.to}</Td>
                <Td isNumeric>{item.multiplyBy}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th colSpan={3}>
                {Array.from({ length: pageCount }, (_, index) => (
                  <button key={index} onClick={() => handlePageChange(index)}>
                    {index + 1}
                  </button>
                ))}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
       </div>
      </DIV>

    )
}
export default Card;