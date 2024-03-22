/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Form, Input, Row } from "antd";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { ChangeEvent, useState } from "react";
import getImageURL from "@/lib/getImageURL";
import { useCreateVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { downLoadPNG } from "@/lib/downloadPDF";
import volunteerBanner from '../../assets/volunteersBanner.jpg'

const VolunteerForm = () => {
    const [createVolunteer] = useCreateVolunteerMutation();
    const [image, setImage] = useState(null);
    const onFinish = async (values: any) => {
        if (image) {
            values.image = image;
            const res = await createVolunteer(values).unwrap();

            if (res.result.insertedId) {
                downLoadPNG("volunteer_form");
                toast.success("Your volunteer added successfully");
            } else {
                toast.error("Something went wrong while add");
            }
        }
    };

    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const imageURL = await getImageURL(file as File);
        console.log(imageURL);
        setImage(imageURL);
    };
    return (
        <div id="volunteer_form">
            <div className=" bg-center bg-no-repeat bg-cover py-12 flex justify-center items-center text-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${volunteerBanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "cover",
                }}>
                <div className="col-span-12 md:col-span-2">
                </div>
                <div className="col-span-12 text-center md:col-span-3 space-y-2 text-white ">
                    <h1 className="text-4xl ">VOLUNTEER RECRUITMENT</h1>
                    <p className="  text-gray-200">
                        Fill in the form below to volunteer to our organization
                    </p>
                </div>
            </div>
            <div className="w-full md:max-w-4xl mx-auto">
                <Form
                    className="border p-5"
                    layout="vertical"
                    name="volunteerRecruitment"
                    onFinish={onFinish}
                    onFinishFailed={() =>
                        toast.error("Please fill in all required fields")
                    }
                >
                    <Row gutter={16}>
                        <Col span={24} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>First Name</label>}
                                name="firstName"
                                rules={[
                                    { required: true, message: "Please enter your first name" },
                                ]}
                            >
                                <Input
                                    className="h-10"
                                    placeholder="Please enter your first name"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>Last Name</label>}
                                name="lastName"
                                rules={[
                                    { required: true, message: "Please enter your last name" },
                                ]}
                            >
                                <Input
                                    className="h-10"
                                    placeholder="Please enter your last name"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>E-mail</label>}
                                name="email"
                                rules={[
                                    { required: true, message: "Please enter your email" },
                                    { type: "email", message: "Please enter a valid email" },
                                ]}
                            >
                                <Input className="h-10" placeholder="Please enter your email" />
                            </Form.Item>
                        </Col>
                        <Col span={24} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>Phone</label>}
                                name="phone"
                                rules={[
                                    { required: true, message: "Please enter your phone number" },
                                ]}
                            >
                                <Input
                                    className="h-10"
                                    placeholder="Please enter your phone number"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>Country</label>}
                                name="country"
                                rules={[
                                    { required: true, message: "Please select your country" },
                                ]}
                            >
                                <Input
                                    className="h-10"
                                    placeholder="Please enter your country"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>Address</label>}
                                name="address"
                                rules={[
                                    { required: true, message: "Please enter your address" },
                                ]}
                            >
                                <Input
                                    className="h-10"
                                    placeholder="Please enter your address"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>City</label>}
                                name="city"
                                rules={[{ required: true, message: "Please enter your city" }]}
                            >
                                <Input className="h-10" placeholder="Please enter your city" />
                            </Form.Item>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                            <Form.Item
                                label={<label style={{ color: "#374151" }}>Image</label>}
                                name="image"
                                rules={[{ required: true, message: "Please enter image" }]}
                            >
                                <Input
                                    className="h-10 w-full"
                                    onChange={handleImage}
                                    type="file"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                            <Form.Item
                                label={
                                    <label style={{ color: "#374151" }}>State / Province</label>
                                }
                                name="state"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your state/province",
                                    },
                                ]}
                            >
                                <Input
                                    className="h-10"
                                    placeholder="Please enter your state/province"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                            <Form.Item
                                label={
                                    <label style={{ color: "#374151" }}>Postal / Zip Code</label>
                                }
                                name="postalCode"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your postal/zip code",
                                    },
                                ]}
                            >
                                <Input
                                    className="h-10"
                                    placeholder="Please enter your postal/zip code"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="flex justify-end">
                        <Form.Item>
                            <Button className="h-10" variant={"default"} type="submit">
                                Be A Volunteer
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default VolunteerForm;
