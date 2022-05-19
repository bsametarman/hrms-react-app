import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from './../services/jobAdvertisementService';

export default function JobAdvertisementList() {
    
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    
    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Detay</Table.HeaderCell>
                        <Table.HeaderCell>Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements.map((jobAdvertisement=>(
                        <Table.Row>
                        <Table.Cell>{jobAdvertisement.jobPositionId.job_position}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.salary}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.city}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.jobPositionNumber}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.lastApplyDate}</Table.Cell>
                    </Table.Row>
                    )))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
