import { Button } from "@/components/ui/button";
import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Mail } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="container relative mx-auto w-full max-w-7xl  text-gray-700">
            <div className="grid grid-cols-2">
                <div className="order-1 col-span-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.997430551491!2d90.40211001538742!3d23.81033208455712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755f035f8caab39%3A0x2f4e45cb3d123a76!2sDhaka%20City!5e0!3m2!1sen!2sbd!4v1646135685262!5m2!1sen!2sbd"
                        title="Dhaka Map"
                        scrolling="no"
                        frameBorder={0}
                        width="100%"
                        height="300px"
                        className=""
                        loading="lazy"
                    />
                </div>

                <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                    <div className="mx-auto max-w-xl flex flex-col space-y-5">
                        <h2 className="text-4xl font-oswald uppercase">Contact us</h2>

                        <p className="text-sm text-gray-500">
                            Together, we make a difference in times of crisis. Explore,
                            donate, and support our mission to provide critical healthcare
                            supplies where they're needed most .
                        </p>

                        <a
                            href="#mail"
                            className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500"
                        >
                            <Mail className="mr-2 w-5 text-gray-400" />
                            info@medreliefhhub.com
                        </a>

                        <p className="text-sm text-gray-500 leading-6">
                            1/D, Block 100/A Mirour, Dhaka-1216 <br /> Dhaka, Bangladesh
                        </p>

                        <div className="flex items-center">
                            <a
                                href="#twitter"
                                className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125"
                                style={{ backgroundColor: "#1DA1F2" }}
                            >
                                <svg
                                    className="w-4 h-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>

                            <a
                                href="#facebook"
                                className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                                style={{ backgroundColor: "#4267B2" }}
                            >
                                <svg
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                                </svg>
                            </a>

                            <a
                                href="#instagrap"
                                className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125"
                            >
                                <svg
                                    className="w-4 h-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                    <Form layout="vertical" className="w-full" name="form">
                        <Row gutter={10}>
                            <Col span={24} md={{ span: 12 }}>
                                <Form.Item
                                    style={{ color: "red" }}
                                    label={
                                        <label style={{ color: "#374151" }}>Your Full Name</label>
                                    }
                                    name="Name"
                                    rules={[{ required: true, message: "Please enter name" }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={{ span: 12 }}>
                                <Form.Item
                                    label={<label style={{ color: "#374151" }}>Your Email</label>}
                                    name="email"
                                    rules={[{ required: true, message: "Please enter email" }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            label={<label style={{ color: "#374151" }}>Description</label>}
                            name="description"
                            rules={[{ required: true, message: "Please enter description" }]}
                        >
                            <TextArea
                                style={{ height: 100, resize: "none" }}
                                placeholder="Please write a  description"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button variant="secondary" className="w-full" type="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
