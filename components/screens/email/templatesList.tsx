import { emailService } from 'api_services';
import SimpleTable from 'components/common/tables/simpleTable';
import { Layout } from 'components/layout';
import AppRoutes from 'const/routes';
import { EmailTemplate } from 'interfaces';
import { useRouter } from 'next/router';
import * as React from 'react';

const EmailTemplatesListScreen = (): JSX.Element => {
	// Utils
	const router = useRouter();

	// Templates data
	const [templatesData, setTemplatesData] = React.useState<EmailTemplate[]>([]);

	// Fetch templates data
	// NOTE: implementation might change
	React.useEffect(() => {
		async function fetchTemplates(): Promise<void> {
			const response = await emailService.getTemplates();
			setTemplatesData(response.data);
		}

		fetchTemplates();
	}, []);

	return (
		<Layout withHeader>
			<SimpleTable<EmailTemplate>
				columns={[
					{
						header: 'UUID',
						content: (instance) => <p>{instance.uuid}</p>,
					},
					{
						header: 'Name',
						content: (instance) => <p>{instance.name}</p>,
					},
					{
						header: 'Created at',
						content: (instance) => <p>{instance.createdAt}</p>,
					},
					{
						header: 'Modified at',
						content: (instance) => <p>{instance.modifiedAt}</p>,
					},
				]}
				rows={templatesData}
				rowActions={() => [
					{
						label: 'Edit',
						onClick: (instance) => {
							localStorage.setItem('templateToEdit', JSON.stringify(instance));
							router.push({
								pathname: AppRoutes.EMAIL_CONTENT_EDITOR,
								query: {
									editMode: true,
								},
							});
						},
					},
				]}
			/>
		</Layout>
	);
};

export default EmailTemplatesListScreen;