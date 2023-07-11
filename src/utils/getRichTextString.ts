
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';




const getRichTextString =  (entryId:any) => {
    const val=  documentToHtmlString(entryId);

    return val
}

export default getRichTextString;