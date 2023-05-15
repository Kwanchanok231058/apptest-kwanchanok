import React from 'react'

export default function Member() {
    return (
        <div>
            <div class="container">
                <div className="text-danger">
                    <h1>Member Table</h1>
                </div>
                <div class="container mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Detail</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <img src='./images/18.jpg' class="table-danger" alt="Cinque Terre" width="50" high="50" /></td>
                                <td>Pros Perous</td>
                                <td>097-309-2430</td>
                                <td><button a href="#" type="button" class="btn btn-warning">Read more</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <img src='./images/19.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                                <td>Ah Shy</td>
                                <td>093-005-1121</td>
                                <td><button a href="#" type="button" class="btn btn-warning">Read more</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='./images/20.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                                <td>Eye Saving</td>
                                <td>092-690-9859</td>
                                <td><button a href="#" type="button" class="btn btn-warning">Read more</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='./images/21.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                                <td>Mind</td>
                                <td>092-592-3670</td>
                                <td><button a href="#" type="button" class="btn btn-warning">Read more</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='./images/22.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                                <td>Hanna</td>
                                <td>086-122-8815</td>
                                <td><button a href="#" type="button" class="btn btn-warning">Read more</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}