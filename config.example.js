module.exports = {
    settings: {
        label: {
            title: "Label",
            type: "string",
            required: true,
            tooltip: 'tooltip for label',
            description: "some description"
        },
        teaser: {
            title: "Тизер",
            type: "text",
            required: true,
            tooltip: "tooltip for teaser",
            description: "some description"
        },
        description: {
            title: "Description",
            type: "wysiwyg",
            required: false,
            tooltip: 'tooltip for description',
            description: "some description"
        },
        date: {
            title: "Дата",
            type: "date",
            required: false,
            tooltip: 'tooltip for date',
        },
        datetime: {
            title: "Дата и время",
            type: "datetime",
            required: false,
            tooltip: 'tooltip for datetime',
        },
        time: {
            title: "время",
            type: "time",
            required: false,
            tooltip: 'tooltip for time',
        },
        number: {
            title: "Number",
            type: "number",
            required: false,
            tooltip: 'tooltip for number',
        },
        checkbox: {
            title: "Checkbox",
            type: "boolean",
            required: false,
            tooltip: 'tooltip for checkbox',
        },
        color: {
            title: "цвет",
            type: "color",
            required: false,
            tooltip: 'tooltip for color',
        },
        ace: {
            title: "Ace",
            type: "json",
            required: false,
            tooltip: 'tooltip for ace',
        },
        email: {
            title: "E-mail",
            type: "email",
            required: false,
            tooltip: 'tooltip for e-mail',
        },
        month: {
            title: "Month",
            type: "month",
            required: false,
            tooltip: 'tooltip for month',
        },
        range: {
            title: "Range",
            type: "range",
            required: false,
            tooltip: 'tooltip for range',
        },
        week: {
            title: "Week",
            type: "week",
            required: false,
            tooltip: 'tooltip for week',
        },
        fileUploader: {
            title: "FileUploader",
            type: "file",
            required: false,
            tooltip: 'tooltip for fileuploader',
        },
        filesUploader: {
            title: "FilesUploader",
            type: "files",
            required: false,
            tooltip: 'tooltip for filesuploader',
        },
        galleryUploader: {
            title: "GalleryUploader",
            type: "images",
            required: false,
            tooltip: 'tooltip for galleryuploader',
        },
        imageUploader: {
            title: "ImageUploader",
            type: "image",
            required: false,
            tooltip: 'tooltip for galleryuploader',
        },
        schedule: {
            title: "Редактор распорядка",
            type: "worktime",
            required: false,
            tooltip: 'tooltip for schedule',
        }
    }
}
